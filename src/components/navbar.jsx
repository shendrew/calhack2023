import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';
import logo from '../assets/logo.png';
import logoName from '../assets/Shoebill.png';
// import logoBox from '../assets/Rectangle-37.png';
import "../public/App.css";

const Navbar = () => {
	console.log('rendering')
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<img src={logo} alt="Logo" className="logo-img" width="40px"/>
			<img src={logoName} alt="Logo" className="logoName-img" width="60px"/>
			<div className="rectangle"></div>
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