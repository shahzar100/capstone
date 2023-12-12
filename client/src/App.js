import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Home from './pages.jsx/Home'
import Booking from './pages.jsx/Booking'

import Header from './Components/Header';

function App() {
	return (
		<BrowserRouter>
			<div class="container">
				<Header />
				<footer className="footer"> Footer </footer>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/booking' element={<Booking />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
