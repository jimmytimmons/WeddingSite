import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ContentWrapper.scss'

const className = `ContentWrapper`;

class ContentWrapper extends Component {
    render()  {
        return ( 
            <div
                className={`${className} ${this.props.className}`}
            >   
                {this.props.children}
            </div>
        );
    }
}

ContentWrapper.propTypes = {
    className: PropTypes.string
};

export default ContentWrapper;