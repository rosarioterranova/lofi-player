export default function Song({currentSong}){
    return <>
        <div className="song-container">
            <img src={currentSong.cover} alt="song cover"/>
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
            <h3>{currentSong.album}</h3>
        </div>
    </>
}