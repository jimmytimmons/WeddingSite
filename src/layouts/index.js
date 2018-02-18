import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../Components/Header/Header.js';
import Hero from '../Components/Hero/Hero.js';
import Navigation from '../Components/Navigation/Navigation.js';

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    style={{ 
      height: '100%', 
      width: '100%',
      backgroundColor: '#fbfaeb'
    }}
  >
    <Helmet
      title="Jimmy & Katie"
      meta={[
        { name: 'description', content: 'Wedding' },
        { name: 'keywords', content: 'Wedding, Jimmy, Katie' },
      ]}
    />
    <Header />
    <Navigation />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
