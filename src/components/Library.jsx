import LibrarySong from "./LibrarySong"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic} from "@fortawesome/free-solid-svg-icons"

export default function Library({songs, selectSongHandler}){
    return <>
        <div className="library">
            <h2><FontAwesomeIcon icon={faMusic} /> Library</h2>
            <div className="library-songs">
                {songs.map(s => <LibrarySong currentSong={s} key={s.id} selectSongHandler={selectSongHandler} />)}
            </div>
        </div>
    </>
}