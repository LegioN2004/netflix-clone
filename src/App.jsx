import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const App = () => {
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/profile" element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					} />
				</Routes>
			</AuthContextProvider>
		</>
	);
};

export default App;
