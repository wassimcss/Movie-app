import React,{useState} from 'react'
import './App.css';
import { Filter } from './Components/MovieList/MovieCard/Filter';

import { MovieList } from './Components/MovieList/MovieList';
import { NewMovie } from './Components/NewMovie';

function App() {
  const [movies, setMovies] = useState([
    {
        title: "peaky blinders",
        posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
        rate: 8
    },
    {
        title: "Game of thrones",
        posterUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
        rate: 9.3
    },
    {
        title: "The good doctor",
        posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
        rate: 8.6
    },
    {
      title: "Breakin bad",
      posterUrl: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rate: 9.5
  },
  {
    title: "Prison Break",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
    rate: 9
},
{
  title: "Gangs of London",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
  rate: 8.2
},
{
  title: "Taboo",
  posterUrl: "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
  rate: 8.2
},
{
  title: "Lethal Weapon",
  posterUrl: "https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
  rate: 7.5
},
{
  title: "Dexter",
  posterUrl: "https://images-na.ssl-images-amazon.com/images/I/81JKXT1j0OL._SL1500_.jpg",
  rate: 8.1
},
{
  title: "Black Sails",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
  rate: 7.8
},
{
  title: "Black List",
  posterUrl: "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
  rate: 7.6
},
{
  title: "The Walking deads",
  posterUrl: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
  rate: 8.1
},
{
  title: "Vis A Vis",
  posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
  rate: 7.5
},
{
  title: "Cukur",
  posterUrl: "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
  rate: 8.1
},
{
  title: "See",
  posterUrl: "https://fr.web.img6.acsta.net/pictures/19/09/10/20/30/1507616.jpg",
  rate: 7.9
},
{
  title: "SHERLOCK",
  posterUrl: "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
  rate: 9.1
},




]);
  
const addMovie = (titre,poster,note) => {
  return setMovies([...movies,{title:titre,posterUrl:poster,rate:note}])
}


return (
    <div className="App">
     
      {movies.length!==0 ? <MovieList movies={movies} setMovies={setMovies}  /> :<div>
      <Filter/><div className="Error">ERROR 404 : Not Found</div>
      </div> }
      <NewMovie addMovie = {addMovie} movies ={movies} setMovies = {setMovies}/>
      <footer>
      © 2020 Copyright:Wassim Ahmed
      </footer>
    </div>
  );
}

export default App;
