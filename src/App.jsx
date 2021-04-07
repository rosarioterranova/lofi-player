import "./App.scss"
import Player from "./components/Player"
import Song from "./components/Song"
import data from "./data.json"

export default function App() {
  return (
    <div className="App">
      <h1>Lo Fi Player</h1>
      <Song />
      <Player />
      <audio controls src={data[0].path} type="audio/ogg" />
    </div>
  );
}

