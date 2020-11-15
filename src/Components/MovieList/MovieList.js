import React ,{useState , useEffect} from 'react'
import { Filter } from './MovieCard/Filter'
import { MovieCard } from './MovieCard/MovieCard'



export const MovieList = (props) => {
    const [title, setTitle] = useState("")
    const [rate, setRate] = useState(0)
    const [list,setList] = useState(props.movies)
   
    
    
    
    
    const handleChange = (e) => {
        setTitle(e.target.value)
    
    }
    const handleClick = (e) => {
    
        if (e.key === "Enter")
        {
            e.preventDefault();
            let newList=props.movies.filter((movie) => { 
                  return movie.title.toLowerCase().search(title.toLowerCase()) !== -1 
            }).filter(movie => (movie.rate)>rate)
            props.setMovies(newList);    
        }        
        
    }
    
    useEffect(() => {
        
        props.setMovies(list)

    },[title])
    
    const ratingChanged = (e) => {
        setRate(e*2)
      /*  let list=props.movies.filter(movie => (movie.rate)>rate)
        props.setMovies(list) */
        
    }
   
   
return (
    
    <div className="movieList">
        <Filter title={title} rate={rate} movies ={props.movies} ratingChanged ={ratingChanged}  handleChange={ handleChange} handleClick={handleClick} setMovies ={props.setMovies}/>
        {
            
            props.movies.filter((movie) => { 
                return movie.title.toLowerCase().search(movie.title.toLowerCase()) !== -1 
          }).filter(movie => (movie.rate)>rate).map((movie,index) => {
                return (
                    <div key = {index}>
                        <MovieCard title = {movie.title} rate = {movie.rate} src={movie.posterUrl}/>
                    </div>
                )
            })
        }
    </div>
)
}
