import React from 'react'
import { ButtonR} from '../ButtonElementsRouter'
import { Column2, 
         ImgWrap,
         InfoContainer, 
         InfoRow, 
         Column1,
         TextWrapper,
         TopLine,
         Heading, 
         BtnWrap, 
         InfoWrapper,
         Subtitle,
         Img 
        } from './InfoElements'
        // a=b
        // 
        // if(a=b){         
        // }
   
   
const InfoSection = ({lightBg, id, to, download,link, imgStart,blueBg, bgBlue, topLine, lightText, headline, darkText, img, description, buttonLabel, alt, primary, dark, dark2}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} blueBg={blueBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                     <TextWrapper>
                         <TopLine bgBlue={bgBlue}>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headline}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                             <ButtonR to={to} smooth={true} duration={500} spy={true}
                             exact="true"
                             offset={-80} primary={primary ? 1 : 0}
                             dark={dark ? 1 : 0}
                             dark2={dark2 ? 1 : 0}
                             >{buttonLabel}
                             </ButtonR>
                         </BtnWrap>
                     </TextWrapper>
                     </Column1>
                     <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
        </InfoContainer>   
        </>
    )
}

export default InfoSection
