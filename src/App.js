import React from 'react';
import './App.css';
import { TabGroup, Tab } from 'react-material-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Background from './images/library.jpg';

import Home from './pages/Home';
import About from './pages/About';
import MeetTheStaff from './pages/MeetTheStaff';
import Gallery from './pages/Gallery';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';

const tabs = [
	{ linkTo: '/', label: 'Home' },
	{ linkTo: '/about', label: 'About' },
	{ linkTo: '/meetTheStaff', label: 'Meet the Staff' },
	{ linkTo: '/gallery', label: 'Gallery' },
	{ linkTo: '/facilities', label: 'Facilities' },
	{ linkTo: '/contact', label: 'Contact' }
];

class Layout extends React.Component {
	render() {
		return (
			<div className='background-container'>
			<Router>
				<div className='tab-container'>
					<div style={{ width: 700}}>
						<TabGroup style={{ indicator: { color: '#2196f3' } }}>
							{this.renderTabs()}
						</TabGroup>
					</div>
				</div>

				<div className='background'>
					<Switch>
						<Route exact path='/'><Home /></Route>
						<Route exact path='/about'><About /></Route>
						<Route exact path='/meetTheStaff'><MeetTheStaff /></Route>
						<Route exact path='/gallery'><Gallery /></Route>
						<Route exact path='/facilities'><Facilities /></Route>
						<Route exact path='/contact'><Contact /></Route>
					</Switch>
				</div>
			</Router>
			</div>
		);
	}

	renderTabs() {
		return tabs.map((tab, index) => {
			return (
				<Link to={tab.linkTo} key={index} style={{ textDecoration: 'none', color: 'black' }}>
					<Tab>{tab.label}</Tab>
				</Link>
			);
		});
	}
}

export default Layout;
