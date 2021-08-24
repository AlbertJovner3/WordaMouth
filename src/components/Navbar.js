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
                        <NavLinks to= "/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/places">Local Cuisine</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/signin">Sign in</NavLinks>
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
