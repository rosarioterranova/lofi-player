export default function Song({currentSong, isPlaying=false}){
    return <>
        <div className="song-container">
            <img src={currentSong.cover} alt="song cover" className={isPlaying? "rotate":null}/>
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
            <h3>{currentSong.album}</h3>
        </div>
    </>
}