import React from 'react';
import './App.css';
import { TabGroup, Tab } from 'react-material-tabs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import MeetTheStaff from './components/MeetTheStaff';
import Gallery from './components/Gallery';
import Facilities from './components/Facilities';
import Contact from './components/Contact';

const tabs = [
	{ linkTo: '/home', label: 'Home' },
	{ linkTo: '/about', label: 'About' },
	{ linkTo: '/meetTheStaff', label: 'Meet the Staff' },
	{ linkTo: '/gallery', label: 'Gallery' },
	{ linkTo: '/facilities', label: 'Facilities' },
	{ linkTo: '/contact', label: 'Contact' }
];

class Layout extends React.Component {
	render() {
		return (
			<Router>
				<div style={{ backgroundColor: '#39A0ED' }}>
					<div style={{ width: 700 }}>
						<TabGroup style={{ indicator: { color: '#2196f3' } }}>
							{this.renderTabs()}
						</TabGroup>
					</div>
				</div>

				<Switch>
					<Route path='/home'><Home/></Route>
					<Route path='/about'><About/></Route>
					<Route path='/meetTheStaff'><MeetTheStaff/></Route>
					<Route path='/gallery'><Gallery/></Route>
					<Route path='/facilities'><Facilities/></Route>
					<Route path='/contact'><Contact/></Route>
				</Switch>
			</Router>
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
