import React, { useState } from 'react';
import styles from '../styles/SearchResults.module.css';


const Playlist = (props) => {
    const { newPlaylist } = props;
    const { songs } = props;

    console.log(newPlaylist)
    console.log(songs)

    
    return (
        <div className={styles.div}>
            <h2 className={styles.resultsDiv}>My Playlist</h2>

            {
                newPlaylist.map((song, index) => (
                    <div key={index}>
                        <p className={styles.songName}>{song.value}</p>
                        <p>{song.name}</p>
                        <p>{song.data}</p>
                    </div>

                ))
            }
            <button>Save Playlist</button>
        </div>
    )
}

export default Playlist;