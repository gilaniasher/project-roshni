import React from 'react';
import ImageGallery from 'react-image-gallery';
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

export default class Home extends React.Component {
	render() {
		return (
			<div className='center-container'>
				<h2>Home</h2>
				<ImageGallery items={images} />

				<h2>The Situation</h2>
				<p>situation text</p>

				<h2>Our Goal</h2>
				<p>goal text</p>

				<h2>Our Process</h2>
				<p>process text</p>
			</div>
		);
	}
}
