import React from 'react'
import { ArrowForward } from '../Medpreneur/MedpreneurElements'
import { LinkButton } from '../LinkButton'
import Icon1 from '../../images/Medpreneur/preneur-1.jpg'
import Icon2 from '../../images/Medpreneur/preneur-2.jpg'
import Icon3 from '../../images/Medpreneur/preneur-3.jpg'
import Icon4 from '../../images/Medpreneur/preneur-4.jpg'
import Icon5 from '../../images/Medpreneur/preneur-5.jpg'
import Icon6 from '../../images/Medpreneur/preneur-6.jpg'
import {
AboutusContainer,
MedpreneurContainer,
MedpreneurP,
MedpreneurWrapper,
NavigationTab,
NavigationBar,
Home,
CurrentLink,
AboutusText,
ParagraphOne,
MedpreneurCard,
MedpreneurIcon
} from './MedpreneurElements'

const IBRT = ({id}) => {
    return (
        <div id={id}>
            <AboutusContainer>
                <NavigationBar>
                    <NavigationTab>
                    <Home to="/">Home</Home>
                    {<ArrowForward/>}
                    <CurrentLink>Medpreneur's Hub</CurrentLink>
                    </NavigationTab>
                </NavigationBar>
                  <MedpreneurContainer>
                    <MedpreneurP>Medpreneur's Hub</MedpreneurP>
                    <MedpreneurWrapper>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon1}/> 
                        </MedpreneurCard>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon2}/> 
                        </MedpreneurCard>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon3}/> 
                        </MedpreneurCard>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon4}/> 
                        </MedpreneurCard>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon5}/> 
                        </MedpreneurCard>
                        <MedpreneurCard>
                        <MedpreneurIcon src={Icon6}/> 
                        </MedpreneurCard>
                       </MedpreneurWrapper>
                    </MedpreneurContainer>
                <AboutusText>
                    <ParagraphOne>
                     A list of our talented Medpreneurs have been compiled 
                     for easy navigation 
                     <LinkButton> Click to Download</LinkButton>
                   </ParagraphOne>
                </AboutusText>
            </AboutusContainer>
        </div>
    )
}

export default IBRT
