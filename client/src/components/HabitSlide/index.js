import React from 'react';
import Slider from 'react-animated-slider';
import content from './content';
import habitSlide from './habitSlide.css';

function HabitSlide() {
	return (
		<div className="habitSlideContainer">
			<Slider classNames={habitSlide} autoplay={4000}>
				{content.map((item, index) => (
					<div key={index}>                
										<img src={item.image} alt={item.name} className="sliderImageContent" />
										<div className="overlay"></div> 
						<div className="center">
							<h2 className="itemTitle">{item.title}</h2>								
							<p className="itemDescription">{item.description}</p>
							{/* <button className="itemButton">{item.button}</button> */}
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default HabitSlide;