import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

import { Filter } from './MovieCard/Filter'
import { MovieCard } from './MovieCard/MovieCard'



export const MovieList = (props) => {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(0)
    const [list, setList] = useState(props.movies)

    const handleChange = (e) => {
        setTitle(e.target.value)

    }
    const handleClick = (e) => {

        if (e.key === "Enter") {
            e.preventDefault();
            let newList = props.movies.filter((movie) => {
                return movie.title.toLowerCase().search(title.toLowerCase()) !== -1
            }).filter(movie => (movie.rate) > rate)
            props.setMovies(newList);
        }

    }

    useEffect(() => {
        if (props.movies.lenght === 0 || title === "")
            return props.setMovies(list)

    }, [title])

    const ratingChanged = (e) => {
        setRate(e * 2)
        /*  let list=props.movies.filter(movie => (movie.rate)>rate)
          props.setMovies(list) */

    }
    console.log(props)


    return (

        <div className="movieList">
           
            <Filter title={title} rate={rate} movies={props.movies} ratingChanged={ratingChanged} handleChange={handleChange} handleClick={handleClick} setMovies={props.setMovies} />
            {

                props.movies.filter((movie) => {
                    return movie.title.toLowerCase().search(movie.title.toLowerCase()) !== -1
                }).filter(movie => (movie.rate) > rate).map((movie, index) => {
                    return (
                        <div key={index}>
                             <Link to={`/movie/${movie.title}`}>
                                <MovieCard title={movie.title} rate={movie.rate} src={movie.posterUrl} /> 
                                 
                             </Link>  
                                              
                        </div>
                    )
                })
            }
            
               
           
        </div>
    )
}
