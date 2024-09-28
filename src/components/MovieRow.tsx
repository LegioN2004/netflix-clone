import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieRow = ({ title, url }) => {
	const [movies, setMovies] = useState([]);

	const fetchMovies = async () => {
		await axios.get(url).then((res) => {
			const movies = res.data.results;
			setMovies(movies);
		});
	};
	console.log(movies);

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<>
			<h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
			<div className="relative flex items-center">
				<div
					id={`slider`}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
				>
					{movies.map((movies) => (
						<h1>{movies.title}</h1>
					))}
				</div>
			</div>
		</>
	);
};

export default MovieRow;
