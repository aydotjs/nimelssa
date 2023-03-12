import React from 'react'
import {
AboutusContainer,
AboutusText,
ParagraphOne,
ParagraphTwo
} from './PresidentSpeechElement'

const PresidentSpeech = ({id}) => {
    return (
        <div id={id}>
            <AboutusContainer>
                <AboutusText>
                    <ParagraphOne>
                    I, hereby, welcome you to the official website of the Nigeria Medical
            Laboratory Science Students' Association University of Ibadan where you can get to see us
            and follow our activities.
            
            Interred within are; creative articles, animated pictures and 
            ingenious literary works, showcasing our talents in multifaceted 
            dimensions and our zeal to participate in the happenings of the
             medical world. Indeed our drive to give back to the Society
              positively has been a key factor which has constantly morphed us.
            
            You can always check back here for the updates of our 
            activities and the resolutions from the pragmatic and pristine 
            dealings of our Senate and Congress meetings, to ensure that
             all are on-board as we chart a bold course towards the NIMELSSA UI 
             of our dream.
            
            Once again, welcome!
                   </ParagraphOne>
                   <ParagraphTwo>Signed,</ParagraphTwo>
                   <ParagraphTwo>Oyebamiji Toba</ParagraphTwo>
                   <ParagraphTwo>2020/2021 NIMELSSA UI President</ParagraphTwo>
                </AboutusText>
            </AboutusContainer>
        </div>
    )
}

export default PresidentSpeech
