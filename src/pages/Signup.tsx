import { BiChevronRight } from 'react-icons/bi';
import NavbarSecond from '../components/NavbarSecond';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
	const [rememberLogin, setRememberLogin] = useState(true)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<>
			<NavbarSecond />
			<div className="relative h-screen pt-10">
				<img
					className="hidden sm:block absolute h-full w-full object-cover z-0 top-0 left-0"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
					alt="background image"
				/>

				<div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
				<div className="relative z-20 flex flex-col justify-center items-center h-full text-center">
					<h1 className="text-white text-5xl sm:text-6xl font-bold mb-4">
						Unlimited movies, TV
					</h1>
					<h1 className="text-white text-5xl sm:text-6xl font-bold mb-4">
						shows and more
					</h1>
					<h3 className="text-white text-xl sm:text-2xl font-medium mb-4">
						Starts at ₹0. Cancel anytime
					</h3>
					<p className="text-white text-md sm:text-lg font-medium mb-1">
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>

					<form className="justify-center items-center w-full max-w-md pt-3">
						<input
							className="w-full opacity-70 sm:w-2/3 px-4 py-3 rounded-sm border border-gray-300 text-white bg-black focus:outline-none focus:border-white-500 mb-4 sm:mb-0 sm:mr-4"
							type="email"
							placeholder="Email address"
							value={email}
							onChange={(e) => { setEmail(e.target.value) }}
						/>
						<input
							className="w-full opacity-70 sm:w-2/3 px-4 py-3 pt-2 rounded-sm border border-gray-300 text-white bg-black focus:outline-none focus:border-white-500 mb-4 sm:mb-0 sm:mr-4"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => { setEmail(e.target.value) }}
						/>
						<button
							className="w-full flex items-center sm:w-auto p-1 bg-[#E50914] text-white text-lg font-nsans-bold rounded-md hover:bg-red-700 transition duration-300"
							type="submit"
						>
							Get Started
							<BiChevronRight className="ml-2 h-9 w-4" />
						</button>
					</form>

					<div className="flex justify-between items-center w-full max-w-md mt-4 px-4">
						<label className="text-gray-400">
							<input type="checkbox" className="mr-2 rounded-md" />
							Remember me
						</label>
						<p className="text-gray-400 cursor-pointer hover:underline">
							Need help?
						</p>
					</div>
          <p className='mt-4'>
            <span className='text-gray-500 font-nsans-medium mr-2'>Already subscribed to Netflix?</span>
            <Link to='/login' className='text-white font-nsans-bold hover:underline'>Login</Link>
            </p>
				</div>
			</div>
		</>
	);
};

export default Signup;
