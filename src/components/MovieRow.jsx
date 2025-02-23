import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MovieItem } from './MovieItem';

const MovieRow = ({ title, url }) => {
	const [movies, setMovies] = useState([]);
	const rowID = Math.floor(Math.random() * 1000); // gives random value for the row id such taht the slider can be controlled indidually 

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

	const slide = (offset) => {
		const slider = document.getElementById('slider' + rowID);
		slider.scrollLeft = slider.scrollLeft + offset;
	}

	return (
		<>
			<h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft onClick={() => slide(-500)} size={40} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" />
				<div
					id={`slider` + rowID}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
				>
					{movies.map((movie) => (
						<MovieItem key={movie.id} movie={movie}></MovieItem>
					))}
				</div>
				<MdChevronRight onClick={() => slide(+500)} size={40} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" />
			</div>
		</>
	);
};

export default MovieRow;
