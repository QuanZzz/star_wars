import "./App.css";
import "antd/dist/antd.css";
import MovieDetails from "./components/MovieDetails";
import CharactersList from "./components/CharactersList";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div>
      <CharactersList />
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default App;
