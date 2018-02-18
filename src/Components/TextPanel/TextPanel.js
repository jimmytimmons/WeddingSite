import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './TextPanel.scss'

const className = `TextPanel`;

class TextPanel extends Component {
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

TextPanel.propTypes = {
    className: PropTypes.string
};

export default TextPanel;