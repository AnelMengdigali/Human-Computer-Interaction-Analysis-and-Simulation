import React, {useState} from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav> 
            <Logo>
                <NavLink to="/">SP <span>HCI</span></NavLink>
            </Logo>
            <Hamburger onClick={ () => setIsOpen(!isOpen) }> 
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>               
                <NavLink to="/"><MenuLink>Home</MenuLink></NavLink>
                <NavLink to="/systems"><MenuLink>Projects</MenuLink></NavLink>
                <NavLink to="/models"><MenuLink>Models</MenuLink></NavLink>
                <NavLink to="/entities"><MenuLink>Entities</MenuLink></NavLink>
                <NavLink to="/datasets"><MenuLink>Dataset</MenuLink></NavLink>
                <NavLink to="/about"><MenuLink>Documentation</MenuLink></NavLink>
                <NavLink to="/contact"><MenuLink>Forum</MenuLink></NavLink>
                <NavLink to="/login"><MenuLink>Access</MenuLink></NavLink>
                { /*<Link to="/about"><MenuLink>About</MenuLink></Link>*/}
                {/* <Link to="/login"><MenuLink>Login</MenuLink></Link>*/}
                {/* <MenuLink href="">Home</MenuLink>*/}
            </Menu>
        </Nav>
  )
}

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #04b0c6;
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 20px;
        background: #020024;
        margin-bottom: 4px;
        corder-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }

`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
        transition: max-height 0.3s ease-in;
    };
`;

const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #020024;
    transition: all 0.3s ease-in;
    font-size: 1rem;
    &:hover {
        color: #00d4ff;
    }
`;

const Logo = styled.a`
    padding: 1rem 0;
    color: #020024;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

export default NavBar;

