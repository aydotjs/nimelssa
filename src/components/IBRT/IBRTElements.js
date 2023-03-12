import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const AboutusContainer = styled.div`
background-color: #fff;
height: 880px;
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
export const AboutusText = styled.div`
width: 100%;
height: 100vh;
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
margin-bottom: 20px;
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