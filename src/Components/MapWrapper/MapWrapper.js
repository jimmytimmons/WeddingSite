import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { 
    GoogleMap, 
    Marker, 
    withScriptjs, 
    withGoogleMap 
} from 'react-google-maps';

class MapWrapper extends Component {
    render() {
        const marker = this.props.marker;

        return (
            <GoogleMap
                defaultZoom={9}
                defaultCenter={{ ...marker }}
                isMarkerShown
                
            >
                <Marker position={{ ...marker }} />
            </GoogleMap>
        );
    }
}

MapWrapper.propTypes = {
    marker: PropTypes.object.isRequired
};

export default withScriptjs(withGoogleMap(MapWrapper));