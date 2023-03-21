import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../files/logo.png'
import { menuItems } from './MenuItems'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
function Header() {
  const [open, setOpen] = useState(false);
  const navItems = menuItems.map(({ name, url, id }) => {
    return (
      <Link
        key={id}
        to={url}
        className="mapLink">
        {name}
      </Link>
    )
  })
  return (
    <Container>
      <Logo src={logo} />
      <Menu>
        <p>WELCOME TO MyKOFFEE Shop</p>
      </Menu>
      <RightMenu>
        {navItems}
      </RightMenu>
      <BurgerMenu className="BMenu" >
        {open ? <MdClose onClick={() => setOpen(!open)} /> : <RxHamburgerMenu onClick={() => setOpen(!open)} />}
      </BurgerMenu>
      <Drop>
        {open ?
          menuItems.map(({ name, url, id }) => (
            <div>
              <Link
                key={id}
                to={url}
                className="dropLink">
                {name}
              </Link>
            </div>
          ))
          : ""}
      </Drop>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display:flex;
  position:relative;
  z-index:2;
  align-item:center;
  justify-content:space-between;
  @media(min-width:768px){
   background-color: rgba(0,0,0,.5);
   color: #fff;
}
@media(max-width:768px){
 height:500px
}
  img{
      height:90px;
    }    
`
const Logo = styled.img`
    width: 7rem;
    left:0;
`

const Menu = styled.div`
    p{ 
      color:white;
      padding:0.7rem;
    }
`

const RightMenu = styled.div`
    display: flex;
    right:0;
    @media(max-width: 768px){
      display:none;
    }
`

const BurgerMenu = styled.div`
    display:none;
    @media(max-width:768px){
    display: flex;
    justify-content: end;
    button{
      height:50px;
      width:50px;
      margin: 10px;
      outline-style: none;      
    }
  }
`
const Drop = styled.div`
  position:absolute;
  z-index:3;  
  top:80px;
  width:100%;
  border-bottom:1px solid white;
  @media(min-width:768px){
    display:none;
  }
`