import React from 'react'
import { ArrowForward } from '../AboutUs/AboutUsElements'
import {
AboutusContainer,
NavigationBar,
Home,
CurrentLink,
AboutusText,
ParagraphOne,
ParagraphTwo,
HeaderTwo,
NavigationTab
} from './AboutUsElements'

const AboutUS = ({id}) => {
    return (
        <div id={id}>
            <AboutusContainer>
                <NavigationBar>
                    <NavigationTab>
                    <Home to="/">Home</Home>
                    {<ArrowForward/>}
                    <CurrentLink>About Us</CurrentLink>
                    </NavigationTab>
                </NavigationBar>
                <AboutusText>
                    <ParagraphOne>
                    The Nigerian Medical Laboratory Science Students'
                    Association, University of Ibadan (NIMELSSA UI) established in 2015 is 
                    the representative body for all medical laboratory science students in
                    the prestigious College of Medicine, University of Ibadan. The annual
                    numerical strength of the Association is over 200 Students from 100 level
                    to 500 level from different religious, cultural and ethnic background,
                    from every geopolitical region of Nigeria. NIMELSSA UI is engaged in
                    Health awareness Programmes (e.g. Annual World AIDS Day Celebration, 
                    Breast Cancer awareness, Community Health awareness etc.), Sports,Social
                    and advocacy issues. She coordinates relevant training and capacity development 
                    programmes among Nigerian Students. NIMELSSA UI also provides opportunities 
                    for medical Laboratory students to undertake exchanges and research in other
                    institution Worldwide. The Association pursues her 
                    aims without Political, Religious, Social, Tribal or Global discrimination.",
                </ParagraphOne>
                <HeaderTwo>Aims and Objectives</HeaderTwo>
                <ParagraphTwo>
                    The aims and objectives of NIMELSSA UI are:
                    The promotion of health among Nigerians and 
                    contributing to National Health and Educational 
                    Policy through Youth-voluntarism spearheaded by Medical
                    Laboratory Science Students in Nigeria.
                    To promote humanitarian ideals among Medical
                    Laboratory Science Students and thereby contributing
                    to the production of responsible future Scientist sensitive to their
                    environment. To work in synergy with other stakeholders within and
                    outside the university for the provision of conducive atmosphere for
                    learning and development of individuals and collective potentials of her
                    members. To coordinate opinions and information in the fields of medicine,
                    encourage and publish articles of medical and non medical interests.
                    To promote intellectual, social, cultural, and sporting activities of the association.
                    </ParagraphTwo>
                </AboutusText>
          
            </AboutusContainer>
            
        </div>
    )
}

export default AboutUS
