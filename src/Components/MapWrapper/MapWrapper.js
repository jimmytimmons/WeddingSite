import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap,
} from 'react-google-maps';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


class MapWrapper extends Component {
    constructor(props) {
        super(props);
        this.renderMarkers = this.renderMarkers.bind(this);
    }

    render() {
        const markers = this.props.markers;
        const center = markers[0];
        

        return (
            <GoogleMap
                defaultZoom={this.props.zoom}
                defaultCenter={{ ...center }}
                isMarkerShown
                
            >
                {this.renderMarkers(markers)}
            </GoogleMap>
        );
    }

    renderMarkers(markers) {
        return markers.map(marker => {
            const position = { lat: marker.lat, lng: marker.lng };
            const icon = marker.icon || 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
            const label = { 
                backgroundColor: '#0c2248', 
                fontSize: '14px',
                color: '#fbfaeb', 
                padding: '12px',
                borderRadius: '50%',
                whiteSpace: 'nowrap',
                border: '1px solid #3B547F' 
            };

            return (
                <MarkerWithLabel 
                    key={marker.lat}
                    position={position}
                    icon={{
                        url: icon,
                    }}
                    labelAnchor={new google.maps.Point(0, 0)}
                    labelStyle={{...label}} 
                >
                    <div>{marker.label}</div>
                </MarkerWithLabel>
            );
        });
    }
}

MapWrapper.defaultProps = {
    zoom: 9,
    markers: [],
};

MapWrapper.propTypes = {
    markers: PropTypes.array,
    zoom: PropTypes.number,
};

export default withScriptjs(withGoogleMap(MapWrapper));