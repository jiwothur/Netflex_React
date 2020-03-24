import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from './Button';
import {Icon} from 'react-icons-kit';
import {ic_navigate_next} from 'react-icons-kit/md/ic_navigate_next';
class Header extends Component {

 render() {
  return (
    <HeaderComponent className="header-container">
      <div className="header-top">
        <Logo src={logo} />
        <NavLink className ="signIn-btn" exact to="/">Sign in</NavLink>
      </div>
      {/* Header Content */}
      <div className="header-content">
        <Title>See what's next.</Title>
        <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME .</SubTitle>
        <Button className="main-offer-btn" primary>
          try it now
          <Icon className="Icon"icon={ic_navigate_next} size ={37} />
        </Button>
      </div>
    </HeaderComponent>
    )
  }
 }

export default Header

//Logo
const Logo = styled.img `
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//Header Container
const HeaderComponent = styled.div`
.signIn-btn {
  
  right: 0;
  margin:1.125rem 3% 0;
  padding: 0.4375rem 1.0625rem;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.1875rem;
  font-size:1rem;
  border: none;
  background: var(--main-red);
  position: absolute;
  translate: transform(-50%, -50%);
  cursor: pointer;
  transition: background 0.2s ease-in;
  &:hover{
    background: var(--main-red-hover);
  }
}

//Header Top
.header-top{
  position: relative;
  height: 10rem;
  z-index:1;
}

//Header Content
.header-content{
  width: 65%;
  position: relative;
  margin: 4.5rem auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align:center;
  flex-direction: column;
  z-index : 1;
}
//Main Offer Btn
.main-offer-btn{
  display: inline-block; 
  background: var(--main-red);
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: 0 33%;
  padding: 1.5rem;
  border-radius:0.1875rem;
  font-size: 2rem;
  text-align:center;
  box-shadow: 0 1px 0 rgba(0,0,0,0.45);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover{
    background: var(--main-red-hover);
  }
}
.Icon svg{
  vertical-align: bottom;
  margin-left:1.5rem;
}
`;


//Main Title
const Title = styled.h1 `
  margin: 0 0  1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
`;

//SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
`;


