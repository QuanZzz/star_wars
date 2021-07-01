import { List } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  movies: state.charactersAndMovies.movies,
});

const MovieList = ({ movies }) => {
  const data = movies;
  return (
    <>
      <p>List of Movies:</p>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
        style={{ width: "25%" }}
      />
      <br />
      <br />
    </>
  );
};

export default connect(mapStateToProps)(MovieList);
