import React, { Component } from 'react';

import ContentWrapper from '../Components/ContentWrapper/ContentWrapper.js';
import MapWrapper from '../Components/MapWrapper/MapWrapper.js';
import TextPanel from '../Components/TextPanel/TextPanel.js';

const markers = [
    {
        label: 'The Hamilton Manor',
        lat: 40.1878585,
        lng: -74.6556856
    },
    {
        label: 'Residence Inn Mariott',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        lat: 40.175072, 
        lng: -74.6802233
    },
];
const className = `Hotel`;

import './styles/_hotel.scss'

class Hotel extends Component {
    render() {
        const link = "http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Fiallo-Timmons%20Wedding%5Ettnrt%60FTMFTMA%7CFTMFTMB%7CFTMFTMC%7CFTMFTMD%60149.00-199.00%60USD%60false%601%6012/8/18%6012/10/18%6011/8/18&app=resvlink&stop_mobi=yes";

        return (
            <div
                className={`${className}__wrapper`}
            >
                <div className={`${className}__wrapper__text`}>
                    <h1
                        className={`${className}__title`}
                    >
                        {`Hotel Information`}
                    </h1>
                    <ContentWrapper>
                        <TextPanel
                            className={className}
                        >
                            <p>{`Residence Inn Hamilton by Marriott`}</p>
                            <p>{`559 Route 130 North, Hamilton Township, NJ 08620`}</p>
                            <p>{`(609) 585-2111`}</p>
                            <p>
                                {`Only ~3 minutes from the venue.`}<br/> 
                                {`A shuttle will operate from the hotel to the venue around 3pm`}<br/>
                                {`and again from the venue to the hotel following the reception.`}
                            </p>
                            <h4><b>{`We have a block of rooms available, join us at the complimentary breakfast Monday morning!`}</b></h4>
                            <div
                                className={`${className}__button__container`}
                            >
                                <a 
                                    className={`${className}__button`}
                                    target='_blank'
                                    href='http://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=Fiallo-Timmons%20Wedding%5Ettnrt%60FTMFTMA%7CFTMFTMB%7CFTMFTMC%7CFTMFTMD%60149.00-199.00%60USD%60false%601%6012/8/18%6012/10/18%6011/8/18&app=resvlink&stop_mobi=yes'
                                >
                                    {`Book Your Room`}
                                </a>
                            </div>
                        </TextPanel>
                    </ContentWrapper>
                    <MapWrapper 
                        markers={markers}
                        zoom={13}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtW91lsq39NAQvLfi9rUCux8O4Rb6YYXM&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        );
    }
}
export default Hotel;
