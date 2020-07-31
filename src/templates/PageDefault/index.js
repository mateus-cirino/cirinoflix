import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
