import { useEffect, useState } from "react";
import requests from "./requests";
import instance , {imageBaseUrl} from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row(props) {
    const [movies, setmovies] = useState([])
    const[trailer, settrailer] = useState(false)

    const opts = {
      height: '390',
      width: '1517',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await instance.get(props.fectUrl);
        setmovies(req.data.results)
        // return console.log(req.data.results);
      } catch (error) {
        console.error("Axios Error:", error);
      }
    }

    fetchData();
  }, []);


  function handleClick(movie) {
    if (trailer){
      settrailer("")
    
  }
    else{
      movieTrailer(movie.name || movie.original_name || movie.title) .then((url) =>{
        const urlParams = new URLSearchParams(new URL(url).search)
        settrailer(urlParams.get("v"))
      }).catch((error)=> console.log(error))
  
      
    }
}

  return (
    <div className="posters">
      <h1 id={props.id} className="title">{props.title}</h1>
      <div className="row_posters">
      {movies.map( (movie) => (
        <img onClick={ () => handleClick(movie)} className={`row_poster ${props.Islargerow? 'largerow' : ""}`} src={`${imageBaseUrl}${props.Islargerow? movie.poster_path : movie.backdrop_path
}`}></img>
      ))}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opts}/> };
    </div>
  );
}

export default Row;
