import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import NavigationBarCom from '../components/NavigationBar';
import PresidentSpeech from '../components/PresidentSpeech';

const PresidentSpeechPage = () => {
  
    return (
        <>
        <ScrollToTop/>
        <NavigationBarCom home="Home" text="From the President"/>
        <PresidentSpeech/>
        </>
        
    )
}

export default PresidentSpeechPage
