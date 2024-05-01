import React, { useState }from 'react';
import Playlist from './Playlist'
import styles from '../styles/SearchResults.module.css';

const SearchResults = (props) => {      

    const [newPlaylist, setNewPlaylist] = useState([]);
    
    const { results } = props
    console.log(results)

    const addTrackToPlaylist = (e) => {
        const { name, value, id } = e.target;
        
        setNewPlaylist((prev) => [ { name, value, id } , ...prev])
    }
            
    return (
        <div className= {styles.appDiv}>
            <div className={styles.div}>
                <h2 className={styles.resultsDiv}>Results</h2>
                {
                    results.map((result, index) => (
                        <div className={styles.result} key={index}>
                            <div>
                                <p className={styles.songName}>{result.data.name}</p>
                                <p>{result.data.albumOfTrack.name}</p>
                                <p>artist name</p>
                            </div>
                            <button 
                            name={result.data.name} 
                            value={result.data.albumOfTrack.name}
                            id={result.data.id}
                            onClick={addTrackToPlaylist} 
                            className={styles.add}
                            >
                                Add
                            </button>
                        </div>
                    ))
                }
                {/* {
                    songs.map((song, index) => (
                        <div className={styles.result} key={index}>
                            <div>
                                <p className={styles.songName}>{song.name}</p>
                                <p>{song.album}</p>
                                <p>{song.artist}</p>
                            </div>
                            <button 
                            name={song.artist} 
                            value={song.name} 
                            id={song.id} 
                            dataAlbumName ={song.album} 
                            onClick={addTrackToPlaylist} 
                            className={styles.add}
                            >Add</button>
                        </div>
                    ))
                } */}
                

            </div>
            <Playlist songs={results} newPlaylist={newPlaylist}/>
        </div>
    )
}

export default SearchResults