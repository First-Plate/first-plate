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

		<NavMenu>
    <NavLink to='/App' activeStyle>
      <img src={logo} width="150"/>
		</NavLink>
		<NavLink to='/Profile' activeStyle>
			Profile
		</NavLink>
		<NavLink to='/Results' activeStyle>
			Results
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login'>Login</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
