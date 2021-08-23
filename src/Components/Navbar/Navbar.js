import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarBox, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
    // NavBtn,
    // NavBtnLink
 } from './NavbarElement';


const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavbarBox>
                <NavLogo to='/'>WM</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= "town">Town</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "menu">Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "about">About Us</NavLinks>
                    </NavItem>
                </NavMenu>

                {/* Will use it for the footer 
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn> */}
                
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
