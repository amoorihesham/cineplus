const apiUrls = {
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=',
    popular: 'https://api.themoviedb.org/3/movie/popular?include_adult=false&include_video=false&language=en-US&page=',
    upcoming: 'https://api.themoviedb.org/3/movie/upcoming?include_adult=false&include_video=false&language=en-US&page=1&vote_',
    trending: 'https://api.themoviedb.org/3/trending/all/week?language=en-US',
    genresUrl: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
    searchUrl: 'https://api.themoviedb.org/3/search/movie?query=',
    movieDetails: 'https://api.themoviedb.org/3/movie/',
    imagesUrl: 'https://image.tmdb.org/t/p/w500/',
    imagesUrlOriginal: 'https://image.tmdb.org/t/p/original/'
}

const getOptions = {
    method: 'GET',

    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        accept: 'application/json'
    }
}
export { apiUrls, getOptions };