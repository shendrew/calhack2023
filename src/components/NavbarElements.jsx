import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: transparent;
height: 85px;
display: flex;
justify-content: space-between;
padding: 20px;
z-index: 30;
margin-bottom: 85px;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: #fff;
  display: flex;
  padding-left: 50px;
  padding-right: 55px;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  position: relative; /* Add position relative to create a stacking context */
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 22px;
    left: 33%; 
    width: 0; /* Initial width */
    height: 2px; /* Height of the line */
    background-color: #ffffff; /* Color of the line */
    transition: width 0.3s ease; /* Transition for width */
  }

  &:hover::after {
    width: 60%; 
    margin-left: -15%;
	
  }

  &.active::after {
    width: 60%;
    margin-left: -15%;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #ffffff;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #b4fac7;
padding: 10px 20px;
color: #000000;
outline: none;
border: none;
width: 80px;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 60px;
text-align: center;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;