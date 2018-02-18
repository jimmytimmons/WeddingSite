import React, { Component } from 'react'
import YouTube from 'react-youtube';

import VideoWrapper from '../Components/VideoWrapper/VideoWrapper.js';

import './styles/_proposal.scss'

const options = {
    height: '100%',
    width: '100%'
};

const className = `Proposal`;

class Proposal extends Component {
    render() {
        return (
            <div
                className={className}
            >
                <VideoWrapper>
                    <YouTube
                        videoId="CnVla_ZHPC0"
                        opts={options}
                    >
                    </YouTube>
                </VideoWrapper>
            </div>
        );
    }
}
export default Proposal;
