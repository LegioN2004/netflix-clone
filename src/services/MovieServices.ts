const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// written like this cause the baseUrl remains same for the starting part of the url, so yeah and the rest of the stuff below are th endpoints that we'll required and the website has that we'll be using
const baseUrl: string = 'https://api.themoviedb.org/3';

const endpoints = {
	popular: `${baseUrl}/movie/popular?api_key=${API_KEY}`,
	topRated: `${baseUrl}/movie/top_rated?api_key=${API_KEY}`,
	trending: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
	comedy: `${baseUrl}/search/movie?api_key=${API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`,
	upcoming: `${baseUrl}/movie/upcoming?api_key=${API_KEY}`,
};

export function fetchImage(filename: string, size: string) {
	return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
