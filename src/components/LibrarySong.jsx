export default function LibrarySong({currentSong}){
    return <>
        <div className="library-song">
            <img src={currentSong.cover} alt="song cover"/>
            <div className="info">
                <p>{currentSong.name}</p>
                <p>{currentSong.artist}</p>
                <p>{currentSong.album}</p>
            </div>
        </div>
    </>
}