import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaTwitter, FaInstagram, FaMailBulk} from 'react-icons/fa';
import pdf from "../../images/IfaMagazine.pdf"
import{FooterContainer, 
    FooterWrap,
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo, 
    WebsiteRights, 
    SocialIcons,
    SocialIconLink,
    IfaLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Ifa Magazine</FooterLinkTitle>
                            <FooterLink download  href={pdf}>Download Ifa Magazine</FooterLink>
                        </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Activities </FooterLinkTitle>
                                    <FooterLink href='https://drive.google.com/drive/folders/1fCcoUsQ7M_UfwN5sdrriTCF6t6RjVjXT?usp=sharing'>CHAP</FooterLink>
                                    <FooterLink href='https://drive.google.com/folderview?id=1JPyTmh7AfByBkYbiKjRLp-f1QOUwIGYD'>Gradum Proximum</FooterLink>
                                    <FooterLink href='https://drive.google.com/folderview?id=1ewhsYrEWqrP54kJugBZcU-u6GxqBWB9q'>Symposium</FooterLink>
                                </FooterLinkItems>

                                <FooterLinkItems>
                                <FooterLinkTitle> About Us </FooterLinkTitle>
                                    <FooterLink to="/signin">Articles</FooterLink>
                                    <FooterLink to="/signin">History of the Department</FooterLink>
                                    <FooterLink to="/signin">History of the association</FooterLink>
                                </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'onClick={toggleHome}>NIMELSSA UI</SocialLogo>
                    <WebsiteRights>NIMELSSA UI &copy; {new Date().getFullYear()} The Oracle Of Modern Medicine</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="http://facebook.com/nimelssa_ui" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="http://instagram.com/nimelssa_ui" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="http://twitter.com/nimelssa_ui" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="mailto:nimelssaui@gmail.com" target="_blank" aria-label="Gmail"><FaMailBulk/></SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
