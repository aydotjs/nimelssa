// import styled from 'styled-components';
// import {Link} from 'react-router-dom';
// import { MdKeyboardArrowRight } from 'react-icons/md';

// export const ExecutivesMainContainer = styled.div`
//     margin: 10px auto;
//     max-width: 1000px;
//     display: flex;
//     grid-template-columns: repeat(3,1fr);
//     gap: 20px;
// `
// export const ExecutivesImageContainer = styled.div`
//      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//     height: 500px;
//     background-color: #eeeeee;
//     margin-bottom: 5px;
// `
// export const Figcaption = styled.p`
//  font-size: 1.2rem;
//     font-weight: bold;
//     font-family: 'Montserrat', sans-serif;
//     text-align: center;
// `
// export const ExecutivesImage = styled.img`
//  width: 100%;
// display: block;
// height: 80%;   

// `
    
// export const ArrowForward = styled(MdKeyboardArrowRight)`
// margin-left: 8px;
// margin-right: 8px;
// font-size: 20px;
// font-weight: 700;
// text-align: left;
// display: inline-block;
// `
// export const Home = styled(Link)`
// text-decoration: none;
// color: white;
// font-weight: 700;
// font-size: 20px;
// display: inline-block;
// `
// export const CurrentLink = styled(Link)`
// text-decoration: none;
// color: white;
// font-weight: 700;
// font-size: 20px;
// display: inline-block;
// `
import styled from 'styled-components';

export const ExecutivesContainer = styled.div`
/* height: 800px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background:linear-gradient(
    180deg,
    rgba(10, 167, 96, 1) 0%, 
    rgba(5, 200, 80, 1) 100%
);

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
export const ExecutivesWrapper = styled.div`
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
export const ExecutivesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition:  all 0.2s ease-in-out;
    cursor: pointer
}

`;
 export const ExecutivesIcon = styled.img`
 height: 220px;
 width:  auto;
 margin-bottom: 10px;
 `;

 export const ExecutivesH1 = styled.h1`
 font-size: 2.5rem;
 color: #fff;
 margin-bottom: 64px;

 @media screen and (max-width: 768px){
     font-size: 1.5rem;
     margin-bottom: 10px;
 }
 `;
 export const ExecutivesH2 = styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;
 `;
 export const ExecutivesP = styled.p`
  font-size: 1rem;
  text-align: center;
 `;
