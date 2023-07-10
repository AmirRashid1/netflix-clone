
import React, { useEffect, useState } from 'react'
import Axios from './Axios.jsx';
import requests from './Request';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);


    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    };

    const backGround = "https://image.tmdb.org/t/p/original";
    return (
        <header className='shadow-lg shadow-gray-800' style={{
            backgroundImage: `url('${backGround + "/" + movie.backdrop_path}')`,
            backgroundPosition: 'center center', backgroundSize: 'cover', height: '35rem',opacity:'0.8'
        }}  >
            <div className='md:ml-40 ml-9 md:pt-72 pt-40 dark:text-white'>
                <h1 className='text-white font-mono text-[2rem] ' >{movie?.name || movie?.title}</h1>
                <div className='text-white space-x-3'>
                    <button className='rounded-sm w-[6rem] h-[2rem] opacity-100  bg-gray-700 hover:bg-gray-800 duration-300 hover:w-[7rem]'>Play</button>
                    <button className='rounded-sm w-[6rem] h-[2rem] bg-gray-700 hover:bg-gray-800 duration-300 hover:w-[7rem]'>My List</button>
                </div>
                <p className='text-white font-bold text-[1.3rem] md:w-[50%] opacity-100 ' >Overview: {truncate(`
               ${movie.overview} `, 120)}</p>
            </div>
            <div className='' />
        </header>
    )
}

export default Banner;