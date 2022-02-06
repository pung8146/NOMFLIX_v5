const API_KEY = "5c0c3c5ae53bf94d5f6fab131178fde1";
const BASE_PATH = "https://api.them"

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then
     ((response) => response.json()
    );
}