import React from 'react';
import Icon1 from '../../images/hod.png'
import Icon2 from '../../images/staff-1.png'
import Icon3 from '../../images/staff-2.jpeg'
import Icon4 from '../../images/staff-3.jpg'
import Icon5 from '../../images/exam-coord.PNG'
import Icon6 from '../../images/advisor.jpeg'
import { ServicesContainer,
         ServicesH1,
         ServicesWrapper,
         ServicesIcon,
         ServicesH2,
         ServicesP ,
         ServicesCard }
           from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='lecturers'>
            <ServicesH1>Our Lecturers</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Dr. Mabel Charles-Davies</ServicesH2>
                    <ServicesP>Head of Department</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Dr. S .A Barkarey</ServicesH2>
                    <ServicesP>Academic Staff 1</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Dr. Ajileye</ServicesH2>
                    <ServicesP>Academic Staff 2</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Dr. Kenneth Onyegbula</ServicesH2>
                    <ServicesP>Academic Staff 3</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Dr. O.R Folarin</ServicesH2>
                    <ServicesP>Examination Co-ordinator</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Dr. Bamisaye</ServicesH2>
                    <ServicesP>Staff Advisor</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
