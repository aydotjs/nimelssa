// import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import NIMELSSALOGO from '../../images/nimelssa-logo.jpeg'
import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {Nav,
      NavbarContainer,
      NavLogo,
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavBtn,
      NavBtnLink,
      NimelssaLogo,
      NavLinkR} from './NavBarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', changeNav)  
    }, [] )

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
      <>
      <IconContext.Provider value={{color:'#fff'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to="/" onClick={toggleHome}><NimelssaLogo src={NIMELSSALOGO}/></NavLogo>
               <MobileIcon onClick={toggle}><FaBars/></MobileIcon>  
                <NavMenu> 
                    <NavItem>
                        <NavLinkR to='/aboutus' smooth={true} duration={500} spy={true}
                             exact="true"  offset={-80} activeClass='active'>About Us</NavLinkR>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='lecturers' smooth={true} duration={500} spy={true}
                             exact="true"  offset={-80} activeClass='active'>Our Lecturers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinkR to='/executives' smooth={true} duration={500} spy={true}
                             exact="true"  offset={-80} activeClass='active'>The Executives</NavLinkR>
                    </NavItem>
                    <NavItem>
                        <NavLinkR to='/activities' smooth={true} duration={500} spy={true}
                             exact="true" offset={-80} activeClass='active'>Activities</NavLinkR>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ibrt' smooth={true} duration={500} spy={true}
                             exact="true" offset={-80} activeClass='active'>IBRT</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink smooth={true} duration={500} spy={true}
                             exact="true" offset={-80} to="home">Home</NavBtnLink>
                </NavBtn>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>
      </>
    )
}

export default Navbar
