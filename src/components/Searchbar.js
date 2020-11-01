import React, { useState } from 'react'
import Beer from './Beer'

function Searchbar({ data }) {

    const [search, setSearch] = useState('')
    const [beerfind, setBeerfind] = useState([])

    const beerFilter = (e) => {
        e.preventDefault()
        console.log(search)
        const filteredArry = data.filter(beer => beer.name.toLowerCase() === search.toLowerCase())
        console.log(filteredArry)
        setBeerfind(filteredArry)
    }

    return (
        <div>
            <form onSubmit={beerFilter}>
                <input
                    type="text"
                    placeholder="Type in a Beer..."
                    onChange={(e) => { setSearch(e.target.value) }}
                ></input>
                <button>Search</button>
            </form>
            <h1>{search}</h1>
        </div>
    )
}

export default Searchbar
