import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import './Banner.css';

function Banner(){

const [movie, setMovie] = useState([]);

useEffect(()=>{
    async function fetchData(){
        const request = await axios('https://api.themoviedb.org/3/trending/all/week?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US');
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
    }

    fetchData();
}, [])


function truncate(str, n){
    if(str===undefined)
        return
    return str.length > n ? str.substr(0, n-1)+'.....' : str;
}


    return (
        <header className='banner'
            style={{
                backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            }}
            
        >
            <div className='nav'>
            <img className='nav_image'
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt='Netflix'
            />
            </div>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_description'>{truncate(movie.overview, 200)}</h1>
            </div>
            <div className='banner_fadeaway'></div>
        </header>
    )
}

export default Banner;