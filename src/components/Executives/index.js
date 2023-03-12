// import React from 'react'

// import {
// ExecutivesMainContainer,
// ExecutivesImage,
// ExecutivesImageContainer,
// Figcaption
// } from './ExecutivesElements'

// const Executives = ({name, title, img, data}) => {
//     return (
//         <div>
//             <ExecutivesMainContainer>
                
             
//                  <ExecutivesImageContainer>
//                     <ExecutivesImage src={img}></ExecutivesImage>
//                     <Figcaption>{name} <br/> {title}</Figcaption>
//                 </ExecutivesImageContainer>
                
//             </ExecutivesMainContainer>
//         </div>
//     )
// }

// export default Executives
import React from 'react';
import Icon1 from '../../images/ExecutivesImg/img-12.jpg'
import Icon2 from '../../images/ExecutivesImg/img-11.jpg'
import Icon3 from '../../images/ExecutivesImg/img-1.jpg'
import Icon4 from '../../images/ExecutivesImg/img-2.jpg'
import Icon5 from '../../images/ExecutivesImg/img-3.jpg'
import Icon6 from '../../images/ExecutivesImg/img-4.jpg'
import Icon7 from '../../images/ExecutivesImg/img-5.JPG'
import Icon8 from '../../images/ExecutivesImg/img-6.jpg'
import Icon9 from '../../images/ExecutivesImg/img-8.jpg'
import Icon10 from '../../images/ExecutivesImg/img-10.jpg'
import Icon11 from '../../images/ExecutivesImg/img-7.jpg'





import { ExecutivesContainer,
         ExecutivesWrapper,
         ExecutivesIcon,
         ExecutivesH1,
         ExecutivesH2,
         ExecutivesP ,
         ExecutivesCard }
           from './ExecutivesElements';

const Executives = () => {
    return (
        <ExecutivesContainer id='executives'>
            <ExecutivesH1>The Executives</ExecutivesH1>
            <ExecutivesWrapper>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon1}/>
                    <ExecutivesH2>Oyebamiji Toba</ExecutivesH2>
                    <ExecutivesP>President</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon2}/>
                    <ExecutivesH2>Peters Tobiloba</ExecutivesH2>
                    <ExecutivesP>Vice President</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon3}/>
                    <ExecutivesH2>Iyede Temitayo</ExecutivesH2>
                    <ExecutivesP>Director of Administration</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon4}/>
                    <ExecutivesH2>Adedamola Adedoyin</ExecutivesH2>
                    <ExecutivesP>Assistant Director of Administration</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon5}/>
                    <ExecutivesH2>Falaju Sarah Peace</ExecutivesH2>
                    <ExecutivesP>Director of Finance</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon6}/>
                    <ExecutivesH2>Ajayi Oluwasanmi</ExecutivesH2>
                    <ExecutivesP> Director of Information</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon7}/>
                    <ExecutivesH2>Simeon Gilbert </ExecutivesH2>
                    <ExecutivesP> Director of Information 2</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon8}/>
                    <ExecutivesH2>Atiyeye Oluwatimilehin </ExecutivesH2>
                    <ExecutivesP>Director of Sports</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon9}/>
                    <ExecutivesH2>Akeem-Omosanya Jelilat</ExecutivesH2>
                    <ExecutivesP>Director of Welfare</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon10}/>
                    <ExecutivesH2>Oladeji Sodiq </ExecutivesH2>
                    <ExecutivesP>Special duties Officer</ExecutivesP>
                </ExecutivesCard>
                <ExecutivesCard>
                    <ExecutivesIcon src={Icon11}/>
                    <ExecutivesH2>Umoh Confidence</ExecutivesH2>
                    <ExecutivesP>Treasurer</ExecutivesP>
                </ExecutivesCard>
                
            </ExecutivesWrapper>
        </ExecutivesContainer>
    )
}

export default Executives

