import React from 'react'
import SpecialCard from '../Components/SpecialCard';
import HeroSection from '../Components/HeroSection';

const Home = () => {
	return (
		<main className="main">
			<HeroSection />
			<section className='SpecialSection'>
				<div className="specials">
					<h2> This weeks specials!</h2>
					<a> Online Menu </a>
				</div>

				<div className='specialsList'>
					<SpecialCard title={'Greek Salad'} price={"$12.99"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."} src={"./icons_assets/greek salad.jpg"} alt={"a delicious greek salad"} />
					<SpecialCard title={'Bruchetta'} price={"$5.99"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."} src={"./icons_assets/bruchetta.svg"} alt={"A delicious bruchetta"} />
					<SpecialCard title={'Lemon Dessert'} price={"$5.00"} description={"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."} src={"./icons_assets/lemon dessert.jpg"} alt={"A delicious lemon dessert"} />
				</div>
			</section>
		</main>
	)
}

export default Home