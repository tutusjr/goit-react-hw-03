import React, { useState } from 'react';

export default function SearchBox({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value)

        if (onSearch) {
            onSearch(e.target.value); 
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}> {}
            <input
                type="search"
                value={searchTerm}
                onChange={handleChange}
                placeholder='search...'
            />
        </form>
    );
}
