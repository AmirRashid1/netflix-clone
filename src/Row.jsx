import React, { useEffect, useState } from 'react';
import Axios from './Axios.jsx';
import MoviePreview from './MoviePreview.jsx';

function Row({ title, fetchUrl, isLargeRow = true }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closePreview = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='bg-black'>
      <h1 className='text-[1.7rem] font-bold ml-6 mt-10 text-white'>{title}</h1>
      <div className='flex overflow-auto scroll-smooth scrollbar-hide'>
        {movies.map((movie) => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <div key={movie.id} >
              <div className='md:w-[20em] w-[10rem] m-2 hover:m-4'>
                <img
                  src={`${base_url}${isLargeRow===false ? movie.poster_path : movie.backdrop_path}`}
                  alt=''
                  className='hover:scale-110 shadow-md md:h-[12rem] shadow-gray-500 m-[1rem] border-[1px] hover:border-purple-500 rounded-sm cursor-pointer'
                  onClick={() => handlePosterClick(movie)}
                />

              </div>
             <div className='flex flex-col items-center ml-9'>
             <h2 className='text-white'>{movie.original_title}</h2>
             </div>
            </div>
          )
        ))}
      </div>
      {selectedMovie && <MoviePreview movie={selectedMovie} onClose={closePreview} />}
    </div>
  );
}

export default Row;
