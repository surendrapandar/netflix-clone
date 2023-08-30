import React, { useState, useEffect } from 'react'
import instance, { imageBaseUrl } from './axios';
import "./Banner.css"

function Banner(props) {
    const [movies, setmovies] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
            const req = await instance.get(props.fectUrl);
            const id = Math.floor(Math.random() * req.data.results.length)
            setmovies(req.data.results[id])
          } catch (error) {
            console.error("Axios Error:", error);
          }
        }
    
        fetchData();
      }, []);

  return (


    <div style={{  zIndex: 1, position:'relative' }}>
           
            <div
                className='cover-main'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }}
            >
                <div className='cover-contents'>
                    <h1 className='movie-title'>{movies.title || movies.name || movies.original_name}</h1>
                    <h3 className='movie-overview'>{movies.overview?.length > 200 ? movies.overview.substring(0, 200) + '...' : movies.overview}</h3>

                    <div style={{ paddingTop: 8 }}>
                        <button className='btn-play'><i className="fa fa-play" ></i> Play</button>

                        <button className='btn-more'><i className="fa fa-info-circle" ></i> More Info</button>
                    </div>
                </div>
            </div>
            {/* for faded cover effect */}
            <div className='faded-bottom'></div>

        </div>
  )
}

export default Banner
