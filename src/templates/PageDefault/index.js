import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function PageDefault({children}) {
    return (
        <>
        <Menu />
        {children}
        <Footer />
        </>
    );
}

export default PageDefault;