import React, { useState } from 'react';
import styles from './SearchBox.module.css'

export default function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)

        if (onSearch) {
            onSearch(e.target.value); 
        }
    };

    return (
        <form className={styles.searchBox} onSubmit={(e) => e.preventDefault()}> {}
            <label>find Contacts by name</label>
            <input
                type="search"
                value={searchTerm}
                onChange={handleChange}
                placeholder='search...'
            />
        </form>
    );
}
