import React, { useState } from 'react'
import './App.css';
import { Filter } from './Components/MovieList/MovieCard/Filter';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MovieList } from './Components/MovieList/MovieList';
import { NewMovie } from './Components/NewMovie';
import Switch from 'react-bootstrap/esm/Switch';

import { Ha } from './Components/Ha';

const series = [
  {
    title: "peaky blinders",
    posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
    rate: 8,
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
  },
  {
    title: "Game of thrones",
    posterUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
    rate: 9.3,
    description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
    trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E"
  },
  {
    title: "The good doctor",
    posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
    rate: 8.6,
    description: "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
    trailer: "https://www.youtube.com/embed/msJggy8xtmI"
  },
  {
    title: "Breaking bad",
    posterUrl: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rate: 9.5,
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    trailer: "https://www.youtube.com/embed/lrcqbavlbyQ"
  },
  {
    title: "Prison Break",
    posterUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
    rate: 9,
    description: "Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
    trailer: "https://www.youtube.com/embed/AL9zLctDJaU"
  },
  {
    title: "Gangs of London",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
    rate: 8.2,
    description: "Tells the story of London being torn apart by the turbulent power struggles of its international gangs and the sudden power vacuum that's created when the head of London's most powerful crime family is assassinated.",
    trailer: "https://www.youtube.com/embed/4CJ5p4XisHs"
  },
  {
    title: "Taboo",
    posterUrl: "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
    rate: 8.2,
    description: "Adventurer James Keziah Delaney returns to London during the War of 1812 to rebuild his late father's shipping empire. However, both the government and his biggest competitor want his inheritance at any cost - even murder.",
    trailer: "https://www.youtube.com/embed/W1fiijqrKuc"
  },
  {
    title: "Lethal Weapon",
    posterUrl: "https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
    rate: 7.5,
    description: "A slightly unhinged cop is partnered with a veteran detective trying to maintain a low stress level in his life.",
    trailer: "https://www.youtube.com/embed/wN8h4-oyAbo"
  },
  {
    title: "Dexter",
    posterUrl: "https://images-na.ssl-images-amazon.com/images/I/81JKXT1j0OL._SL1500_.jpg",
    rate: 8.1,
    description: "By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
    trailer: "https://www.youtube.com/embed/YQeUmSD1c3g"
  },
  {
    title: "Black Sails",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
    rate: 7.8,
    description: "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
    trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ"
  },
  {
    title: "Black List",
    posterUrl: "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
    rate: 7.6,
    description: "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
    trailer: "https://www.youtube.com/embed/XihA6GWIBdM"
  },
  {
    title: "The Walking deads",
    posterUrl: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
    rate: 8.1,
    description: "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
    trailer: "https://www.youtube.com/embed/sfAc2U20uyg"
  },
  {
    title: "Vis A Vis",
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
    rate: 7.5,
    description: "Locked Up, originally titled in Spanish as Vis A Vis , is a Spanish serial drama television series produced by Globomedia, initially for Spanish Network Antena 3 and later on for Fox Spain. It premiered on 20 April 2015.[2] The series begins by focusing on a young woman who is sent to prison and then goes on to depict the image of prison and law enforcement systems.",
    trailer: "https://www.youtube.com/embed/ceNKwOvSVm8"
  },
  {
    title: "Cukur",
    posterUrl: "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
    rate: 8.1,
    description: "A dangerous neighborhood, The Pit, ran by a noble mafia family called Koçovars. When the family is in the danger of losing the control of The Pit, their youngest son now must come back to his home, where he could never escape from.",
    trailer: "https://www.youtube.com/embed/Ix43lQOjLGw"
  },
  {
    title: "See",
    posterUrl: "https://fr.web.img6.acsta.net/pictures/19/09/10/20/30/1507616.jpg",
    rate: 7.9,
    description: "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.",
    trailer: "https://www.youtube.com/embed/7Rg0y7NT1gU"
  },
  {
    title: "SHERLOCK",
    posterUrl: "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
    rate: 9.1,
    description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    trailer: "https://www.youtube.com/embed/IrBKwzL3K7s"
  },




];

function App() {
 
  const [movies,setMovies] = useState(series)

  const addMovie = (titre, poster, note) => {
    return setMovies([...movies, { title: titre, posterUrl: poster, rate: note }])
  }
  return (
    <div className="App">
      {movies.length !== 0 ? <MovieList movies={movies} setMovies={setMovies} /> : <div>
        <Filter /><div className="Error">ERROR 404 : Not Found</div>
      </div>}
      <NewMovie addMovie={addMovie} movies={movies} setMovies={setMovies} />

    </div>
  );
}

function AppWithRouter(props) {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/movie/:name" render = {(props) => <Ha movies={series} {...props}/>} />
        </Switch>
      </div>
      <footer>
        © 2020 Copyright:Wassim Ahmed
      </footer>
    </Router>
  )

}

export default AppWithRouter;
