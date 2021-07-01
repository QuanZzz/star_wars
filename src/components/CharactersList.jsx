import { Select } from "antd";
import "antd/dist/antd.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { allActions } from "../stores/actions";

const { Option } = Select;

const mapDispatchToProps = {
  loadAllCharacters: allActions.loadAllCharacters,
  loadAllMovies: allActions.loadAllMovies,
};

const mapStateToProps = (state) => ({
  characters: state.charactersAndMovies.characters,
});

const CharactersList = ({ loadAllCharacters, characters, loadAllMovies }) => {
  useEffect(() => {
    loadAllCharacters();
  }, []);

  const handleChange = (value) => {
    const character = JSON.parse(value);
    loadAllMovies(character.films);
  };

  return (
    <>
      <p>Character: </p>
      <Select style={{ width: "20%" }} onChange={handleChange}>
        {characters.map((c) => {
          return <Option value={JSON.stringify(c)}>{c.name}</Option>;
        })}
      </Select>
      <br />
      <br />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
