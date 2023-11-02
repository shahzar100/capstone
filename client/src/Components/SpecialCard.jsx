import React from 'react'

const SpecialCard = (props) => {
	return (
		<div className='SpecialCard'>
			<img src={props.src} alt={props.alt} />
			<div className='specialInfo'>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
					<h4 className='cardTitle'> {props.title} </h4>
					<p style={{ color: "#ffbb7c", fontWeight: 'bolder' }}> {props.price}</p>
				</div>
				<p> {props.description} </p>
				<p> Order a delivery </p>
			</div>
		</div>
	)
}

export default SpecialCard
