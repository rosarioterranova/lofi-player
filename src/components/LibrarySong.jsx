export default function LibrarySong({currentSong, selectSongHandler}){
    return <>
        <div className="library-song" onClick={() => selectSongHandler(currentSong.id)}>
            <img src={currentSong.cover} alt="song cover"/>
            <div className="info">
                <p className="name">{currentSong.name}</p>
                <p>{currentSong.artist}</p>
                <p>{currentSong.album}</p>
            </div>
        </div>
    </>
}