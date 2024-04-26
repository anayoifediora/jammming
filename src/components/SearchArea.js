import React, { useState }from 'react';
import styles from '../styles/SearchArea.module.css';

const SearchArea = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchText(value)
    }

    return(
        <>
            <form className={styles.form} type="submit">
                <label className={styles.label}>Search for song</label>
                <input className={styles.input}type="text" value={searchText} onChange={handleInputChange}/>
                <button className={styles.button}>Search</button>
            </form>
            
        </>
    )
}

export default SearchArea;