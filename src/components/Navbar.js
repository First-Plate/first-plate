import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import logo from '../assets/logo.png';
import '../components/style.css';


const Navbar = () => {
return (
  
	<Nav>
    <NavLink to='/'>
      <img src={logo} width="150" alt="first date logo"/>
    </NavLink>
		<NavMenu>
      <NavLink to='/profile'>
        Profile
      </NavLink>
      <NavLink to='/results'>
        Results
      </NavLink>
      <NavBtn>
        <NavBtnLink to='/login'>Login</NavBtnLink>
      </NavBtn>
		</NavMenu>
	</Nav>
);
};

export default Navbar;
