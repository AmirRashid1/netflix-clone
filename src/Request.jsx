const API_KEY='375499cea8f34f764d9790d914861998';

const requests={
        fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&withnetworks=213`,
        fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHororMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;