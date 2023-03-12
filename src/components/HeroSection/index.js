import React, {useState} from 'react';
import { ButtonR } from '../ButtonElementsRouter';


import { HeroContainer,
         HeroBg,
         VideoBg, HeroContent,
         HeroH1, HeroBtnWrapper,
         HeroP, ArrowForward,
         ArrowRight} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg />
            </HeroBg>
            <HeroContent>
                <HeroH1> Welcome to  the Nigerian Medical  Laboratory Science Students' Association
                    University of Ibadan
                </HeroH1>
                <HeroP>The Oracle of Modern Medicine </HeroP>
                <HeroBtnWrapper>
                    <ButtonR to='/aboutus' smooth={true} onMouseEnter={onHover} primary="true" dark="true" onMouseLeave={onHover}>
                     About Us {hover ? <ArrowForward/> : <ArrowRight/>}
                    </ButtonR>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
