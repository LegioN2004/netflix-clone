import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from '../context/AuthContext';
import { db } from "../services/firebase";
import { fetchImage } from "../services/MovieServices";

export const MovieItem = ({ movie }) => {
	const [like, setLike] = useState(false);
	const { title, backdrop_path, poster_path } = movie;
	// import NavbarSecond from '../components/NavbarSecond';

	const { User } = UserAuth();

	const markFavShow = async () => {
		const userEmail = User?.email
		if (userEmail) {
			const userDoc = doc(db, 'users', userEmail)
			setLike(!like)
			await updateDoc(userDoc, {
				favShows: arrayUnion({ ...movie }),
			});
		}
		else {
			alert('Please login to mark favourite')
		}
	}

	return (
		<>
			<div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
				<img
					className="w-full h-40 block object-cover object-top"
					src={fetchImage(backdrop_path ?? poster_path, 'w500')}
					alt={title}
				/>
				<div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
					<p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
						{title}
					</p>
					<p onClick={markFavShow} className="cursor-pointer ">
						{like ? (
							<FaHeart
								size={20}
								className="absolute top-2 left-2 text-gray-300"
							/>
						) : (
							<FaRegHeart
								size={20}
								className="absolute top-2 left-2 text-gray-300"
							/>
						)}
					</p>
				</div>
			</div>
		</>
	);
}