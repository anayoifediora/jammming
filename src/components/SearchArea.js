import React, { useState, useEffect }from 'react';
import styles from '../styles/SearchArea.module.css';
import SearchResults from './SearchResults';

const SearchArea = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchText(value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();  

        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchText}&type=tracks&offset=0&limit=10&numberOfTopResults=7`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4976a0d542mshb5ca21f1f8dc0e7p1cdc19jsn40b3c7263b24',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
        
        fetch(url, options)
        .then(function(response) {
          return response.json()
        })
        .then(function(result) {
            console.log(result.tracks.items)
           const results = result.tracks.items
           setResults(results || [])
        })
        .catch(function(e) {
            console.log(e)
        })
    }

    return(
        <>
            <form className={styles.form} type="submit" onSubmit={handleFormSubmit}>
                <label className={styles.label}>Search for song</label>
                <input className={styles.input}type="text" value={searchText} onChange={handleInputChange}/>
                <button className={styles.button}>Search</button>
            </form>

            <SearchResults results={results}/>
        </>
    )
}

export default SearchArea;