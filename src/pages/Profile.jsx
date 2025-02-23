import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import Navbar from "../components/Navbar"
import { UserAuth } from "../context/AuthContext"
import { db } from "../services/firebase"
import { fetchImage } from "../services/MovieServices"

const Profile = () => {
  const [movies, setMovies] = useState([])
  const { User } = UserAuth()

  useEffect(() => {
    if (User) {
      onSnapshot(doc(db, 'users', `${User.email}`), (doc) => {
        const data = doc.data();
        if (data && data.favShows) setMovies(data.favShows)
      })
    }
  }, [User?.email])

  const slide = (offset) => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + offset;
  }

  const handleUnlike = async (movie) => {
    const userDoc = doc(db, 'users', User.email);
    await updateDoc(userDoc, { favShows: arrayRemove(movie) });
  }

  if (!User) return <div>Please login to view your profile</div>

  return (
    <>
      <Navbar />
      <div>
        <div>
          <img
            className="bloc w-full h-[500px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="bg image, your internet sucks" />

          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />

          <div className="absolute top-[20%] p-4 md:p-8 ">
            <h1
              className="text-3xl md:text-5xl font-nsans-bold my-2">
              MY shows
            </h1>
            <p className="font-nsans-light text-gray-400 text-lg">{User.email}</p>
          </div>
        </div>
        <div>
          <h2 className="font-nsans-bold md:text-xl p-4 capitalize">Fav shows</h2>
          <div className="relative flex items-center group">
            <MdChevronLeft onClick={() => slide(-500)} size={40} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" />
            <div
              id={`slider`}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {movies.map((movie) => (
                <div key={movie.id} className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
                  <img
                    className="w-full h-40 block object-cover object-top"
                    src={fetchImage(movie.backdrop_path ?? movie.poster_path, 'w500')}
                    alt={movie.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                    <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                      {movie.title}
                    </p>
                    <p>
                      <AiOutlineClose size={30} onClick={() => handleUnlike(movie)} className="absolute top-2 right-2"></AiOutlineClose>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <MdChevronRight onClick={() => slide(+500)} size={40} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile