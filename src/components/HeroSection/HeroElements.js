import styled, {keyframes} from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import ImageOne from '../../images/gallery-1.JPG'
import ImageTwo from '../../images/gallery-2.jpg'
import ImageThree from '../../images/gallery-3.jpg'
import ImageFour from '../../images/gallery-4.jpg'
const animateBcg = keyframes`
25%{
        background: url(${ImageOne});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
    }
    50%{
        background: url(${ImageTwo});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
    }
    75%{
        background: url(${ImageThree});
        background-repeat: no-repeat;
        background-position: center top ;
        background-size: cover;
    }
    100%{
        background: url(${ImageFour});
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;
    }

`;


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before{
    content:'';
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0% ,
     rgba(0,0,0,0.6) 100%), 
     linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%); 
     z-index: 2;
}


`
export const HeroBg = styled.div`
position: absolute;
top:0;
bottom:0;
left:0;
width: 100%;
height:100%;
overflow:hidden;

`;
export const VideoBg = styled.img`
width: 100%;
height:100%;
-object-fit: cover;
object-fit: cover;
background: #232a34;
background: url(${ImageOne});
animation: ${animateBcg} 40s infinite;
`
export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeroH1 = styled.h1`
color: white;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`
export const HeroP = styled.p`
margin-top: 24px;
color: white;
text-align: center;
max-width: 600px;
font-size:24px;

@media screen and (max-width: 768px){
    font-size: 24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const ArrowForward= styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`