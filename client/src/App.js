import './App.css';
import Header from './Components/Header';
import SpecialCard from './Components/SpecialCard';

function App() {
	return (
		<div class="container">
			<Header />
			<main className="main">
				<article className="article">
					<section className="HeroInfo">
						<h1> Little Lemon </h1>
						<p> Chicago </p>
						<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<a href='/Reservation'> Reserve a table</a>
					</section>
					<img src='./icons_assets/restaurantfood.jpg' alt='Delicious food' />
				</article>
			</main>
			<footer className="footer"> Footer </footer>
		</div>

	);
}

export default App;
