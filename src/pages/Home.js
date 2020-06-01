import React from 'react';
import ImageGallery from 'react-image-gallery';
import ReactPageScroller from 'react-page-scroller';
import './GlobalStyles.css';
import { MdDirectionsRun, MdClear } from 'react-icons/md'
import { FaChild, FaAngry, FaArrowDown } from 'react-icons/fa';

import im1 from '../images/home_gallery/1.jpg';
import im2 from '../images/home_gallery/2.JPG';
import im3 from '../images/home_gallery/3.JPG';
import im4 from '../images/home_gallery/4.JPG';
import im5 from '../images/home_gallery/5.JPG';
import im6 from '../images/home_gallery/6.JPG';

const images = [
	{ original: im1, thumbnail: im1 },
	{ original: im2, thumbnail: im2 },
	{ original: im3, thumbnail: im3 },
	{ original: im4, thumbnail: im4 },
	{ original: im5, thumbnail: im5 },
	{ original: im6, thumbnail: im6 },
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
			are free and provide free food.
		</p>
		<p>
			So why don't children attend?
		</p>
		<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
			<div className='icon-text'>
				<MdDirectionsRun size='20vh' />
				<p>Distance of travel</p>
			</div>
			<div className='icon-text'>
				<FaChild size='20vh' />
				<p>Family problems</p>
			</div>
			<div className='icon-text'>
				<MdClear size='20vh' />
				<p>Capacity limitations</p>
			</div>
			<div className='icon-text'>
				<FaAngry size='20vh' />
				<p>System unwilling to address issues</p>
			</div>
		</div>
		<FaArrowDown size='5vh' style={{ paddingBottom: 50, marginBottom: 'auto' }} />
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
				showThumbnails={false}
			>
				{panels.map((panel) => panelFormatter(panel))}
			</ReactPageScroller>
		);
	}
}
