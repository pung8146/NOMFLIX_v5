const API_KEY = "5c0c3c5ae53bf94d5f6fab131178fde1";
const BASE_PATH = "https://api.themoviedb.org/3"

interface IMovie {
    id:number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}

export interface IGetMoviesResult {
    dates:{
        maximum:string;
        minimun:string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then
     ((response) => response.json()
    );
}