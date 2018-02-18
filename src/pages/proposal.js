import React, { Component } from 'react'
import YouTube from 'react-youtube';

import VideoWrapper from '../Components/VideoWrapper/VideoWrapper.js';

const options = {
    height: '100%',
    width: '100%'
};

class Proposal extends Component {
    render() {
        return (
            <VideoWrapper>
                <YouTube
                    videoId="CnVla_ZHPC0"
                    opts={options}
                >
                </YouTube>
            </VideoWrapper>
        );
    }
}
export default Proposal;
