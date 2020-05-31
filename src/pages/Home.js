import React from 'react';
import ImageGallery from 'react-image-gallery';
import ReactPageScroller from 'react-page-scroller';
import './GlobalStyles.css';

const images = [
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
	},
];

const panelFormatter = (children) => {
	return (
		<div className='home-center-container'>
			<div className='home-panel'>
				{children}
			</div>
		</div>
	);
}

const panels = [
	<>
		<h2>The Situation</h2>
		<p>
			Even after thousands of government-sanctioned schools have opened 
			across India, many children do not attend school. These schools 
			are free and provide free food. So why don't children attend?
		</p>
		<ul>
			<li>Distance of travel</li>
			<li>Family problems</li>
			<li>Capacity limitations</li>
			<li>System unwilling to address issues</li>
		</ul>
	</>,

	<>
		<h2>Who We Are</h2>
		<p>
			Project Roshni is a nonprofit aimed to provide children in India with 
			a decent education.
		</p>
		<ul>
			<li>Books too heavy? We provide free bags</li>
			<li>No such thing as a free lunch? There is for Roshni students</li>
			<li>Can't afford pencils? We provide free stationery</li>
		</ul>

	</>,

	<>
		<h2>Our Goals</h2>
		<ul>
			<li>
				Teach students enough English and basic math so that they can continue 
				learning online or attend an actual school
			</li>
			<li>
				We want to open 100 schools in India, but since our services are free 
				for students, we need your donations
			</li>
		</ul>
	</>,

	<>
		<h2>Our Process</h2>
		<ul>
			<li>Rent out buildings for instruction to take place</li>
			<li>Find volunteers to teach English and basic math</li>
			<li>Transport desks and stationary to instructional site</li>
			<li>Inform students about other schools in the area or online opportunities</li>
		</ul>
	</>,

	<>
		<ImageGallery items={images} />
	</>
];

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: null
		};
	}

	handlePageChange = (number) => {
		this.setState({ currentPage: number });
	};

	render() {
		return (
			<ReactPageScroller 
				pageOnChange={this.handlePageChange}
				customPageNumber={this.state.currentPage}
			>
				{panels.map((panel) => panelFormatter(panel))}
			</ReactPageScroller>
		);
	}
}
