import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './VideoWrapper.scss'

const className = `VideoWrapper`;

class VideoWrapper extends Component {
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
export default VideoWrapper;