import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';


export const SidebarBox = styled.aside`
    font-family: 'Russo One', sans-serif;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #4A4A42;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #F8F0EF;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right:1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper =styled.div`
    color: #F89E95;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    gird-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid template-rows: repeat(6,60px)
    }

`;

export const SidebarLink = styled(LinkScroll)`
    margin: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #F89E95;
    cursor: pointer;

    &:hover {
        color: #F3FAFF;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    margin: 100px;
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border-radius: 10px;
    background: #F89E95;
    white-space: nowrap;
    padding: 15px 60px;
    color: #4A4A42;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
                transition: all 0.2s ease-in-out;
                background: #F3FAFF;
                color: #F89E95;
            }

`


