/*const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";
const api_key = 'f81980ff410e46f422d64ddf3a56dddd';
*/
const request = {
    fetchTrending: 'https://api.themoviedb.org/3/trending/all/week?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US',
    fetchActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=28',
    fetchComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=35',
    fetchHorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=27',
    fetchRomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=10749',
    fetchDocumentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&with_genres=99',
}

export default request;