import React from 'react'

function Beer({ beer }) {

    return (

        <div className="beer">
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <img src={beer.image_url} alt="beer"></img>
            <h3 id="rating">Rating: {beer.attenuation_level}%</h3>
            <div className="desc">
                <h1>Brewers Tips</h1>
                <p style={{ marginTop: '25px' }}>{beer.brewers_tips}</p>
            </div>
        </div>
    )
}

export default Beer
