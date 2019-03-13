import React from 'react';
import Slider from 'react-animated-slider';
import content from './content';
import habitSlide from './habitSlide.css';

function HabitSlide() {
	return (
		<div className="habitSlideContainer">
			{/* <h2>HabitSlide</h2> */}
			<Slider classNames={habitSlide} autoplay={4000}>
				{content.map((item, index) => (
					<div key={index}>   
                    {/* what the code was 
                    style={{ background: `url('${item.image}') no-repeat center center` }}    */}              
                      <img src={item.image} alt={item.name} className="sliderImageContent" /> 
						{/* <div className="center">
							<h1>{item.title}</h1>								
						</div> */}
					</div>
				))}
			</Slider>
		</div>
	);
}

export default HabitSlide;