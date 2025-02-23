import { useState, useEffect } from "react";
import endpoints, { fetchImage } from "../services/MovieServices";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState({});

  const fetchMovies = async () => {
    await axios.get(endpoints.popular).then((res) => {
      const movies = res.data.results;
      const randomMovies = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovies);
    });
  };

  if (!movie) {
    return (
      <>
        <p>Fetching movie........</p>
      </>
    );
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <>
      <div className="w-full h-[550px] lg:h-[850px]">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black">
            <img
              // src={`https://image.tmdb.com/t/p/original/${backdrop_path}`}
              src={fetchImage(backdrop_path, "original")}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute w-full top-[20%] lg:top-[52%] p-4 md:p-8">
            <h1 className="text-3xl md-text-6xl font-nsans-bold pl-4">
              {title}
            </h1>
            <div className="mt-5 mb-4">
              <button className="capitalise bg-gray-300 py-2 px-5 ml-4 text-black font-semibold rounded-sm">
                Play
              </button>
              <button className="ml-4 py-2 px-5 bg-[#737677] font-semibold rounded-sm">
                Watch Later
              </button>
              <div className="pt-3 pl-4">
                <p className="text-gray-400 text-sm">{release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{truncate(overview, 165)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
