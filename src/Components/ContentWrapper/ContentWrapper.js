import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ContentWrapper.scss'

const className = `ContentWrapper`;

class ContentWrapper extends Component {
    render()  {
        return ( 
            <div
                className={`${className}`}
            >   
                {this.props.children}
            </div>
        );
    }
}

export default ContentWrapper;