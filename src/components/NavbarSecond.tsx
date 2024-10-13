import { Link } from 'react-router-dom';
import logoMain from '../assets/logoMain.png';

const Navbar = () => {
	return (
		<>
			<div className="absolute flex justify-between bg-gradient-to-b from-black drop-shadow-2xl text-sm z-50 w-full pt-1">
				<div className="flex justify-between">
					<Link to="/">
						<div className="pt-6 pl-32">
							<img src={logoMain} alt="netflix logo" className="h-10 w-50" />
						</div>
					</Link>
				</div>
				<div className="pt-5 pr-32">
					<Link to="/login">
						<button className="capitalise pr-2">Login</button>
					</Link>
					<Link to="/signup">
						<button className="capitalise text-sm bg-red-600 rounded cursor-pointer px-4 py-2">
							Sign In
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
