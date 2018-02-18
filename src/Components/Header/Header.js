import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link'

import './Header.scss'

const className = `Header`;

class Header extends Component {
    render()  {
        return ( 
            <div
                className={`${className}__wrapper`}
            >   
                <div
                    className={`${className}__box`}
                >
                    <div
                        className={`${className}__title`}
                        onClick={ () => navigateTo('/')}
                    >
                        {"Jimmy & Katie"}
                    </div>
                    <div
                        className={`${className}__date`}
                    >
                        {"12/09/2018"}
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;