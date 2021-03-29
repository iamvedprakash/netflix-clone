import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from './axios.js';

const base_url = 'https://image.tmdb.org/t/p/original/';
function Row({ title, fetchURL }){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios(fetchURL);
            setMovies(request.data.results);
        }

        fetchData();
    }, [fetchURL]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <img className='row_poster'key={movie.id} src={base_url+movie.poster_path} alt={movie.name} />
                ))}
                </div>
        </div>
    )
}

export default Row;