import React, { Component } from 'react';

import ContactForm from '../Components/ContactForm/ContactForm.js';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);

const className = `Contact`;

import './styles/_contact.scss'

class Contact extends Component {
    render() {
        return (
            <ContactForm />
        );
    }
}
export default Contact;
