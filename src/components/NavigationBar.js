import React from 'react'
import { ArrowForward } from './NavigationBarElements'
import {
    NavigationBar,
    Home,
    CurrentLink,
    NavigationTab
    } from './NavigationBarElements'

const NavigationBarCom = ({home, text}) => {
    return (
        <div>
            <NavigationBar>
                    <NavigationTab>
                    <Home to="/">{home}</Home>
                    {<ArrowForward/>}
                    <CurrentLink>{text}</CurrentLink>
            </NavigationTab>
            </NavigationBar>
        </div>
    )
}

export default NavigationBarCom


