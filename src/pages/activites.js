import React from 'react';
import Activities from '../components/activities';
import Footer from '../components/Footer'

import NavigationBarCom from '../components/NavigationBar';
import ScrollToTop from '../components/ScrollToTop';
const ActivitiesPage = () => {
    return (
        <>
        <ScrollToTop/>
        <NavigationBarCom home="Home" text="Activities"/>
        <Activities/>
        <Footer/> 
        </>
        
    )
}

export default ActivitiesPage