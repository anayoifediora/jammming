import React, { useState }from 'react';
import styles from '../styles/SearchResults.module.css';

const SearchResults = (props) => {  
        
    const { results } = props
    console.log(results)
    
    return (
        <>
            <div className={styles.div}>
                <h2 className={styles.resultsDiv}>Results</h2>
                {
                    results.map((result, index) => (
                        <div className={styles.result} key={index}>
                            <p className={styles.songName}>{result.data.name}</p>
                            <button className={styles.add}>Add</button>
                        </div>
                    ))
                    
                }
            </div>
        </>
    )
}

export default SearchResults