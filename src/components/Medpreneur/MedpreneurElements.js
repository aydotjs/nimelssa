import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const AboutusContainer = styled.div`
background-color: #fff;
/* height: 880px; */
`

export const NavigationBar = styled.div`
background-color: #202122;
color: white;
width: 100%;
height: 100px;
display: flex;
padding: 10px;
position: relative;
`
export const NavigationTab = styled.div`
position: absolute;
top: 35%;
display: flex;
align-items: center;

`
export const MedpreneurContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

@media screen and (max-width: 1000px){
    /* height: 1000px; */

}

@media screen and (max-width: 768px){
    /* height: 1800px; */

}
@media screen and (max-width:480px){
    /* height: 1900px; */
    
}
`;

export const MedpreneurWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
grid-template-columns: 1fr;
padding: 0 20px;
}
`;
export const MedpreneurCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 450px;
padding: 30px;
box-shadow: 0 3px 5px rgba(0,0,0,0.9);
transition: all 0.2s ease-in-out;
&:hover{
    transform: scale(1.02);
    transition:  all 0.2s ease-in-out;
    cursor: pointer
}
`
export const MedpreneurIcon = styled.img`
height: 220px;
width:  auto;
margin-bottom: 10px;
`;
export const MedpreneurP = styled.p`
font-size: 1.5rem;
text-align: center;
padding: 15px;
font-weight: 600;
color: white;
`;
export const ActivitiesLink = styled.a`
text-decoration: none;
`
export const AboutusText = styled.div`
width: 100%;
`
export const ParagraphOne = styled.p`
padding: 2rem;
color: rgb(49, 44, 43);
line-height: 2;
text-align: justify;
text-justify: inter-word;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
max-width: 600px;
font-size: 20px;
color: black;
@media screen and (max-width : 760px){
    font-size: 18px;
}
@media screen and (max-width : 480px){
    font-size: 15px;
}
`

export const ArrowForward = styled(MdKeyboardArrowRight)`
margin-left: 8px;
margin-right: 8px;
font-size: 20px;
font-weight: 700;
text-align: left;
display: inline-block;
`
export const Home = styled(Link)`
text-decoration: none;
color: white;
font-weight: 700;
font-size: 20px;
display: inline-block;
`
export const CurrentLink = styled(Link)`
text-decoration: none;
color: white;
font-weight: 700;
font-size: 20px;
display: inline-block;
`