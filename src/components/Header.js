import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../files/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Logo src={logo} />
      <Menu>
        <p>WELCOME TO MyKOFFEE Shop</p>
      </Menu>
      <RightMenu>
        {/* <Link to="menu">Menu</Link>
        <Link to="about">About</Link> */}
      </RightMenu>
      <BurgerMenu className="BMenu" >
        {open ? <MdClose onClick={() => setOpen(!open)} /> : <RxHamburgerMenu onClick={() => setOpen(!open)} />}
      </BurgerMenu>
      <Drop>
        {open ?
        <div>
             {/* <Link to="menu">Menu</Link>
             <Link to="about">About</Link> */}
             </div>
             :""}
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