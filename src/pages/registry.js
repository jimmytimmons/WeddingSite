import React, { Component } from 'react'

const className = `Registry`;

import './styles/_registry.scss'

class Registry extends Component {
    render() {
        return (
            <h1
                className={`${className}__title`}
            >
                {`Coming Soon`}
            </h1>
        );
    }
}
export default Registry;
