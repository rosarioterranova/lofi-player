//Data
import {useState, useRef} from "react"
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

  //States
  const [songs, setSongs] = useState(getData())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [songInfo, setSongInfo] = useState({currentTime: 0, duration: 0 })
  const [isPlaying, setIsPlaing] = useState(false)
  const [isLibraryShowed, setIsLibraryShowed] = useState(false)
  const [isModalShowed, setisModalShowed] = useState(false)

  //Refs
  const audioRef = useRef(null)

  function changeSong(action){
    const index = songs.indexOf(currentSong)
    if(action === "next" && index !== songs.length-1){
      setCurrentSong(songs[index + 1])
    } else if(action === "previous" && index !== 0){
      setCurrentSong(songs[index - 1])
    }
    audioRef.current.play().then(() =>{
      audioRef.current.play()
      setIsPlaing(true)
    })
  }

  function selectSong(id){
    setCurrentSong(songs.find(s => s.id === id))
    audioRef.current.play().then(() =>{
      audioRef.current.play()
      setIsPlaing(true)
    })
  }

  return (
    <div className="App">
      <h1>Lo-Fi Player</h1>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player
        currentSong={currentSong}
        changeSongHandler={changeSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaing={setIsPlaing}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      
      <FontAwesomeIcon size="2x" className="menu" icon={faBars} onClick={() => setIsLibraryShowed(!isLibraryShowed)} />
      <Library songs={songs} selectSongHandler={selectSong} isLibraryShowed={isLibraryShowed} />
      
      <FontAwesomeIcon size="2x" className="question" icon={faQuestionCircle} onClick={()=> setisModalShowed(true)}/>
      {isModalShowed? <Modal onClickhandler={()=> setisModalShowed(false)} /> : null}
    </div>
  );
}

