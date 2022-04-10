import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from 'components/Template/Navigation';
import Topbar from 'components/Template/Topbar';

const Main = (props) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Apex India" defaultTitle="Apex India" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Topbar/>
      <Navigation/>
      <div id="main">
        {props.children}
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Apex India",
};

export default Main;
