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
	<>
  
	<Nav>
    <NavLink to='/' activeStyle>
      <img src={logo} width="150"/>
    </NavLink>
		<NavMenu>
      <NavLink to='/profile' activeStyle>
        Profile
      </NavLink>
      <NavLink to='/results' activeStyle>
        Results
      </NavLink>
      <NavBtn>
        <NavBtnLink to='/login'>Login</NavBtnLink>
      </NavBtn>
		</NavMenu>
    
		
	</Nav>
	</>
);
};

export default Navbar;
