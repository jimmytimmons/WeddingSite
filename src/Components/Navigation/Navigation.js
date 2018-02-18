import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link'


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
            </div>
        );
    }
}
export default Navigation;