import React from 'react'
import { ArrowForward } from '../IBRT/IBRTElements'
import { LinkButton } from '../LinkButton'
import {
AboutusContainer,
NavigationBar,
Home,
CurrentLink,
AboutusText,
ParagraphOne,
NavigationTab
} from './IBRTElements'

const IBRT = ({id}) => {
    return (
        <div id={id}>
            <AboutusContainer>
                <NavigationBar>
                    <NavigationTab>
                    <Home to="/">Home</Home>
                    {<ArrowForward/>}
                    <CurrentLink>IBRT</CurrentLink>
                    </NavigationTab>
                </NavigationBar>
                <AboutusText>
                    <ParagraphOne>
                     A team of 8 biomedical science researchers at the
                     University of Ibadan, led by Prof. O. G. Ademowo,
                     envisioned new opportunities to foster early career 
                     research participation for young undergraduate students.
                     <LinkButton href='https://ibadanphageresearchteam.org/'> Click to Explore</LinkButton>
                   </ParagraphOne>
                   
                </AboutusText>
            </AboutusContainer>
        </div>
    )
}

export default IBRT
