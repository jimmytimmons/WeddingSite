import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);


import './Navigation.scss'

const className = `Navigation`;

const links = [
	{ label: 'The Proposal', link: '/proposal' },
	{ label: 'Venue Information', link: '/venue' },
	{ label: 'Hotel Information', link: '/hotel' },
	{ label: 'Gift Registry', link: '/registry' },
	{ label: 'Contact Us', link: '/contact'}
];

class Navigation extends Component {
    render()  {
    	const pathName = window.location.pathname;

        return ( 
            <div
                className={`${className}__wrapper`}
            >   
				{links.map(link => Navigation.renderLink(pathName, link))}
            </div>
        );
    }

    static renderLink(pathName, link) {
    	const active = pathName === link.link ? `${className}__link__active` : null;
    	return (
			<div
				key={link.label}
				className={`${className}__link ${active}`}
				onClick={ () => navigateTo(link.link)}
			>
				{link.label}
			</div>
		);
	}
}

export default Navigation;