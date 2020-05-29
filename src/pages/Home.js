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

const situation = () => {
	return (
		<div className='center-container'>
			<h2>The Situation</h2>
			<p>situation text</p>
		</div>
	);
};

const goal = () => {
	return (
		<div className='center-container'>
			<h2>Our Goal</h2>
			<p>goal text</p>
		</div>
	);
};

const process = () => {
	return (
		<div className='center-container'>
			<h2>Our Process</h2>
			<p>process text</p>
		</div>
	);
};

const gallery = () => {
	return (
		<div className='center-container'>
			<ImageGallery items={images} />
		</div>
	);
}

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
				{situation()}
				{goal()}
				{process()}
				{gallery()}
			</ReactPageScroller>
		);
	}
}
