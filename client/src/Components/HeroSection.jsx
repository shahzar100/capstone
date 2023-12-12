import React from 'react'

const HeroSection = () => {
	return (
		<article className="article">
			<section className="HeroInfo">
				<h1> Little Lemon <br /><span>Chicago</span> </h1>
				<p>  </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href='/Reservation'> Reserve a table</a>
			</section>
			<img src='./icons_assets/restaurantfood.jpg' alt='Delicious food' />
		</article>
	)
}

export default HeroSection