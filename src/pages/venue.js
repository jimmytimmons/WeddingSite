import React, { Component } from 'react'

import ContentWrapper from '../Components/ContentWrapper/ContentWrapper.js';
import MapWrapper from '../Components/MapWrapper/MapWrapper.js';
import TextPanel from '../Components/TextPanel/TextPanel.js';

const marker = {
    lat: 40.175072, 
    lng: -74.6802233
};

const className = `Venue`;

import './styles/_venue.scss'

class Venue extends Component {
    render() {
        const link = <a href="http://thehamiltonmanor.com">thehamiltonmanor.com</a>;
        return (
            <div
                className={`${className}__wrapper`}
            >
                <h1
                    className={`${className}__title`}
                >
                    {`Venue Information`}
                </h1>
                <ContentWrapper>
                    <TextPanel
                        className={className}
                    >
                        <p>{`The Hamilton Manor`}</p>
                        <p>{`30 NJ-156, Hamilton Township, NJ 08620`}</p>
                        <p>{`(609) 581-6782 | `}{link}</p>
                    </TextPanel>
                    <TextPanel
                        className={className}
                    >
                        <div>
                            <h4>{`Schedule`}</h4>
                            <p>{`Ceremony : 3:30pm`}</p>
                            <p>{`Cocktail : 4 - 5pm`}</p>
                            <p>{`Reception : 5 - 9pm`}</p>
                        </div>
                    </TextPanel>
                </ContentWrapper>
                <MapWrapper 
                    marker={marker}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtW91lsq39NAQvLfi9rUCux8O4Rb6YYXM&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}
export default Venue;
