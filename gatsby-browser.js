/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');

exports.onRouteUpdate = (state, page, pages) => {
	ReactGA.pageview(state.location.pathname);
};


