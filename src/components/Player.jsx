import {useRef, useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons"

export default function Player({currentSong, changeSongHandler}){
    const [isPlaying, setIsPlaing] = useState(false)
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    const audioRef = useRef(null)

    function play(){
        audioRef.current.play()
        setIsPlaing(true)
    }

    function pause(){
        audioRef.current.pause()
        setIsPlaing(false)
    }

    function back(){
        changeSongHandler("previous")
    }

    function forward(){
        changeSongHandler("next")  
    }

    function updateTime(e){
        const currentTime = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({
            currentTime: currentTime,
            duration: duration
        })
    }

    function dragCurrent(e){
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    function formatTime(time){
        return `${Math.floor(time / 60)}:`+`0${Math.floor(time % 60)}`.slice(-2)
    }

    return <>
    <div className="player">

        <div className="time-control">
        <p>{songInfo.currentTime? formatTime(songInfo.currentTime) : "0:00"}</p>
            <input type="range" min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragCurrent} />
            <p>{songInfo.duration? formatTime(songInfo.duration) : "-:-"}</p>
        </div>

        <div className="play-control">
            <FontAwesomeIcon onClick={back} className="skip-back" size="2x" icon={faAngleLeft} />
            {isPlaying? <FontAwesomeIcon onClick={pause} className="play" size="2x" icon={faPause} /> : <FontAwesomeIcon onClick={play} className="play" size="2x" icon={faPlay} />}
            <FontAwesomeIcon onClick={forward} className="skip-forward" size="2x" icon={faAngleRight} />
        </div>

        <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={updateTime} onLoadedMetadata={updateTime} />
    </div>
    </>
}