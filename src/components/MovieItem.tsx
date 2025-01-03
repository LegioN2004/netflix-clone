import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { fetchImage } from "../services/MovieServices";

const MovieItem = ({ movie }: string): string => {
  const [like, setLike] = useState(false);

<<<<<<< HEAD
	const { title, backdrop_path, poster_path } = movie;
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
					<p>
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
=======
  const { title, backdrop_path, poster_path } = movie;
  return (
    <>
      <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
        <img
          className="w-full h-40 block object-cover object-top"
          src={fetchImage(poster_path, "w500")}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
          <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
            {title}
          </p>
          <p>
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
>>>>>>> 0b6d1da0289579adf23527ffcac58818bc6e5242
};

export default MovieItem;
