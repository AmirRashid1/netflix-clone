function MoviePreview({ movie, onClose }) {
    const base_url = 'https://image.tmdb.org/t/p/original/';

    return (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center mt-30'>
            <div className='md:w-11/12 max-w-4xl mx-auto rounded-lg overflow-hidden'>
                <div className='flex justify-end'>
                    <button
                        className='text-white text-2xl mr-4 mt-4 hover:text-gray-300 transition-colors duration-200 focus:outline-none'
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div className='flex justify-center mb-6 relative' >
                    <img
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.original_title}
                        className='w-40 md:w-80 h-auto cursor-pointer'
                    />
                
                </div>
                <h2 className='text-white text-xl font-bold'>{movie.original_title}</h2>
                <p className='text-white md:w-full w-[19rem] ml-3'>{movie.overview}</p>
                <div className='flex justify-center mt-6'>
                </div>
            </div>
        </div>
    );
}

export default MoviePreview;
