import LibrarySong from "./LibrarySong"

export default function Library({songs}){
    return <>
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(s => <LibrarySong currentSong={s} />)}
            </div>
        </div>
    </>
}