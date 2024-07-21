import axios from "axios"
import { apiUrls, getOptions } from "./Urls"

export const getTopRated = (pageNumber: number) => {


    return axios.get(`${apiUrls.topRated}${pageNumber}`, getOptions)
}

export const getMovieData = (movieId: string) => {
    return axios.get(`${apiUrls.movieDetails}${movieId}`, getOptions)

}