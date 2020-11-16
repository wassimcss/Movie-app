import React from 'react'

import { Link } from 'react-router-dom';
import { Filter } from './MovieList/MovieCard/Filter';



export const Ha = (props) => {

     
       let movie = props.movies.find(el => el.title === props.match.params.name)
    
    return (
        <div>
         <Filter style = {{marginTop:0}}/>
           <div className="description">
           <h1>Description</h1>
            {
                movie ? (
                    <div>
                      <p>{movie.description}</p>
                        <iframe width="731" height="411" src={movie.trailer} title ={movie.title} />
                        <Link to ="/" exact><button >Go back</button> </Link>
                    </div>
                ):null
            }
           </div>
           
        </div>
    )
}
