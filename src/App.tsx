import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarSecond from './components/NavbarSecond';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
};

export default App;
