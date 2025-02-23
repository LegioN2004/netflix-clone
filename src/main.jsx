import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import './index.css';

createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthContextProvider>
);
