import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);


import './Navigation.scss'

const className = `Navigation`;

class Navigation extends Component {
    render()  {
        return ( 
            <div
                className={`${className}__wrapper`}
            >   
                <div
                    className={`${className}__link`} 
                    onClick={ () => navigateTo('/proposal')}
                >
                    {`The Proposal`}
                </div>
                <div
                    className={`${className}__link`}
                    onClick={ () => navigateTo('/venue')}
                >
                    {`Venue Information`}
                </div>
                <div
                    className={`${className}__link`}
                    onClick={ () => navigateTo('/hotel')}
                >
                    {`Hotel Information`}
                </div>
                <div
                    className={`${className}__link`}
                    onClick={ () => navigateTo('/registry')}
                >
                    {`Gift Registry`}
                </div>
				<div
					className={`${className}__link`}
					onClick={ () => navigateTo('/contact')}
				>
					{`Contact Us`}
				</div>
            </div>
        );
    }
}
export default Navigation;