import React from 'react';
import Executives from '../components/Executives';
import NavigationBarCom from '../components/NavigationBar';
import ScrollToTop from '../components/ScrollToTop';

const ExecutivesPage = () => {
    return (
        <>
        <ScrollToTop/>
        <NavigationBarCom home="Home" text="Meet the Executives"/>
        <Executives/>
        </>
        
    )
}

export default ExecutivesPage
