import styled from 'styled-components';
export const ActivitiesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
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
export const ActivitiesWrapper = styled.div`
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
export const ActivitiesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 450px;

padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition:  all 0.2s ease-in-out;
    cursor: pointer
}
`
export const ActivitiesIcon = styled.img`
height: 220px;

width:  auto;
margin-bottom: 10px;
`;

export const ActivitiesP = styled.p`
font-size: 1.5rem;
text-align: center;
padding: 15px;
font-weight: 600;
color: white;
`;

export const ActivitiesLink = styled.a`
text-decoration: none;


`
