import { Link } from 'react-router-dom';
import logoMain from '../assets/logoMain.png';

const Navbar = () => {
	return (
		<>
			<div className="absolute flex justify-between bg-gradient-to-b from-black drop-shadow-2xl text-sm z-50 w-full">
				<div className="flex justify-between">
					<Link to="/">
						<div className="pt-6 pl-12 ">
							<img src={logoMain} alt="netflix logo" className="h-6 w-50" />
						</div>
					</Link>
					<div className="pt-6 pl-10 flex">
						<ul className="flex justify-between pl-3">
							<Link to="/">
								<li className="font-nsans-regular pr-4">Home</li>
							</Link>
							<li className="font-nsans-regular pr-4">TV Shows</li>
							<li className="font-nsans-regular pr-4">Movies</li>
							<li className="font-nsans-regular pr-4 ">New & Popular</li>
							<li className="font-nsans-regular pr-4">My list</li>
							<li className="font-nsans-regular pr-4">Browse by Languages</li>
						</ul>
					</div>
				</div>
				<div className="pt-5 pr-12">
					<Link to="/login">
						<button className="capitalise pr-2">Login</button>
					</Link>
					<Link to="/signup">
						<button className="capitalise bg-red-600 rounded cursor-pointer px-2 py-2">
							SignUp
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
