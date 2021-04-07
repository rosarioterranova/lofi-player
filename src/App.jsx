//Data
import {useState} from "react"
import "./App.scss"
import getData from "./utils"

//Components
import Player from "./components/Player"
import Song from "./components/Song"

export default function App() {

  const [songs, setSongs] = useState(getData())
  const [currentSong, setCurrentSong] = useState(songs[0])

  return (
    <div className="App">
      <h1>Lo Fi Player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />

      {/* <audio controls src={getData()[1].audio} type="audio/ogg" /> */}
    </div>
  );
}

