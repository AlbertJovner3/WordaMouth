import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarBox, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElement';


const Navbar = () => {
    return (
    <>
        <Nav>
            <NavbarBox>
                <NavLogo to='/'>WM</NavLogo>
                <MobileIcon>
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
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
