import React, { Component } from 'react'
import YouTube from 'react-youtube';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);

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
