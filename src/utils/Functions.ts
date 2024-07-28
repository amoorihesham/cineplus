import axios from "axios"
import { apiUrls, getOptions } from "./Urls"

export const getTopRated = (pageNumber: number) => {


    return axios.get(`${apiUrls.topRated}${pageNumber}`, getOptions)
}

export const getPopular = (pageNumber: number) => {


    return axios.get(`${apiUrls.popular}${pageNumber}&vote_count.gte=200`, getOptions)
}

export const getMovieData = (movieId: string) => {
    return axios.get(`${apiUrls.movieDetails}${movieId}?append_to_response=videos`, getOptions)

}

export const getTrending = () => {


    return axios.get(`${apiUrls.trending}`, getOptions)
}



