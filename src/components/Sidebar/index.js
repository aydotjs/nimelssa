import React from 'react';
import{SidebarContainer,
      Icon,
      CloseIcon,
      SidebarWrapper,
      SidebarMenu,
      SidebarLink,
      SideBtnWrap,
      SidebarRoute,
      SidebarLinkR  } from './SidebarElements';
    //   onClick={toggle}
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkR to='/aboutus'  onClick={toggle}  smooth={true} duration={500} spy={true}
                             exact="true">About us</SidebarLinkR>
                    <SidebarLink to="lecturers"  onClick={toggle}  smooth={true} duration={500} spy={true}
                             exact="true" >Our Lecturers</SidebarLink>
                    <SidebarLinkR to="/executives"  onClick={toggle}  smooth={true} duration={500} spy={true}
                             exact="true" >Meet the Executives</SidebarLinkR>
                    <SidebarLinkR to="/activities"  onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true" >Activities</SidebarLinkR>
                    <SidebarLink to="ibrt"  onClick={toggle} smooth={true} duration={500} spy={true}
                             exact="true" >IBRT</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute smooth={true} duration={500} spy={true}
                             exact="true" offset={-80} to='home'>Home</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
