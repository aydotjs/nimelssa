import React from 'react'
import Icon1 from '../../images/Activities/act-1.jpg'
import Icon2 from '../../images/Activities/act-2.jpg'
import Icon3 from '../../images/Activities/act-3.jpg'
import Icon4 from '../../images/Activities/act-4.jpg'
import Icon5 from '../../images/Activities/act-5.jpg'
import Icon6 from '../../images/Activities/act-6.jpg'

import{
    ActivitiesContainer,
    ActivitiesWrapper, 
    ActivitiesCard,
    ActivitiesIcon,
    ActivitiesP,

} from './ActivitiesElements'
const Activities = () => {
    return (
        <div>
            <ActivitiesContainer>
                <ActivitiesP>Extracurricular Activities</ActivitiesP>
                <ActivitiesWrapper>
                
                    <ActivitiesCard>
                       <ActivitiesIcon src={Icon1}/> 
                      
                    </ActivitiesCard>
                    <ActivitiesCard>
                        <ActivitiesIcon src={Icon2}/>
                        
                    </ActivitiesCard>
                    <ActivitiesCard>
                        <ActivitiesIcon src={Icon3}/>
                   
                    </ActivitiesCard>
                    <ActivitiesCard>
                        <ActivitiesIcon src={Icon4}/>
                        
                    </ActivitiesCard>
                    <ActivitiesCard>
                        <ActivitiesIcon src={Icon5}/>
                      
                    </ActivitiesCard>
                    <ActivitiesCard>
                        <ActivitiesIcon src={Icon6}/>
                        
                    </ActivitiesCard>
                </ActivitiesWrapper>

            </ActivitiesContainer>
        </div>
    )
}

export default Activities
