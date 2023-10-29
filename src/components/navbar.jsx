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
			<img src={logo} alt="Logo" className="logo-img" width="40px"/>
            <NavLink to='/' activeStyle>
                PROFILE
            </NavLink>
            <NavLink to='/stats' activeStyle>
                STATS
			</NavLink>
			<NavLink to='/support' activeStyles>
				SUPPORT
			</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;