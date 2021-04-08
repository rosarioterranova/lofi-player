//Data
import {useState} from "react"
import "./App.scss"
import getData from "./utils"

//Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library"
import Modal from "./components/Modal"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faQuestionCircle, faBars} from "@fortawesome/free-solid-svg-icons"

export default function App() {
  const [songs, setSongs] = useState(getData())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isLibraryShowed, setIsLibraryShowed] = useState(false)
  const [isModalShowed, setisModalShowed] = useState(false)

  function changeSong(action){
    if(action === "next"){
      setCurrentSong(songs[1])
    } else if(action === "previous"){
      setCurrentSong(songs[0])
    }
  }

  function selectSong(id){
    setCurrentSong(songs.find(s => s.id === id))
  }

  return (
    <div className="App">
      <h1>Lo-Fi Player</h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} changeSongHandler={changeSong} />
      <FontAwesomeIcon size="2x" className="menu" icon={faBars} onClick={() => setIsLibraryShowed(!isLibraryShowed)} />
      {isLibraryShowed? <Library songs={songs} selectSongHandler={selectSong} /> : null }
      <FontAwesomeIcon size="2x" className="question" icon={faQuestionCircle} onClick={()=> setisModalShowed(true)}/>
      {isModalShowed? <Modal onClickhandler={()=> setisModalShowed(false)} /> : null}
    </div>
  );
}

