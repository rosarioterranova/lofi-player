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

  function changeSong(action){
    if(action === "next"){
      setCurrentSong(songs[1])
    } else if(action === "previous"){
      setCurrentSong(songs[0])
    }
  }

  return (
    <div className="App">
      <h1>Lo-Fi Player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} changeSongHandler={changeSong} />
    </div>
  );
}

