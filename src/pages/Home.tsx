import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import Navbar from '../components/Navbar';
import endpoints from '../services/MovieServices';

const Home = () => {
	return (
		<>
		<Navbar />
			<Hero></Hero>
			<MovieRow title="Upcoming" url={endpoints.upcoming}></MovieRow>
			<MovieRow title="Trending" url={endpoints.trending}></MovieRow>
			<MovieRow title="Top Rated" url={endpoints.topRated}></MovieRow>
			<MovieRow title="comedy" url={endpoints.comedy}></MovieRow>
			<MovieRow title="popular" url={endpoints.popular}></MovieRow>
		</>
	);
};

export default Home;
