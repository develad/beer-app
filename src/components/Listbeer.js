import React from 'react'
import Beer from './Beer'

function Listbeer({ beers }) {
    // console.log(beers)

    return (
        <div className="beers">
            {beers.map(beer =>
                <Beer beer={beer} key={beer.id} />
            )}
        </div>
    )
}


//     beers.map(beer =>
//         <Beer beer={beer} key={beer.id} />
//     )
// }


export default Listbeer
