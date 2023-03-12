import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';


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

