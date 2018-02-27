import React, { Component } from 'react';

import ContactForm from '../Components/ContactForm/ContactForm.js';

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
