import React from 'react'
import { 
    SidebarBox, 
    CloseIcon, 
    Icon, 
    SideBtnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, 
    SidebarWrapper
  } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarBox isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='/places' onClick={toggle}>Local Cuisine</SidebarLink>
                    <SidebarLink to='/signin' onClick={toggle}>Sign In</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>                
            </SidebarWrapper>
        </SidebarBox>
    );
}

export default Sidebar;
