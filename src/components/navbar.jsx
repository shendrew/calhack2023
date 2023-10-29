import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';
import logo from '../assets/logo.png';
import "../public/App.css";

const Navbar = () => {
	console.log('rendering')
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<img src={logo} alt="Logo" width="40px"/>
            <NavLink to='/' activeStyle>
                Profile
            </NavLink>
            <NavLink to='/stats' activeStyle>
                Stats
			</NavLink>
			<NavLink to='/support' activeStyles>
				Support
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;