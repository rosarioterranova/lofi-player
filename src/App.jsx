import "./App.scss"
import Player from "./components/Player"
import Song from "./components/Song"

export default function App() {
  return (
    <div className="App">
      <h1>Lo Fi Player</h1>
      <Player />
      <Song />
    </div>
  );
}

