import React, { useState } from 'react';

export default function SearchBar(){

    const[query, setQuery] = useState([]);
    const[searchResult, setSearchEResult] = useState([]);

    const handleSearch = async() => {
        try{
            const responce = await fetch(`/users?query=${query}`);
            if(responce.ok){
                const data = await responce.json();
                setSearchEResult(data);
            } else {
                console.log('Failed to fetch search');
            }
        } catch(error){
            console.error(error);
        }
    }
    return(
        <div>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch} className='button'> Search </button>
            <ul>
                {searchResult.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    )
}