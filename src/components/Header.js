import React from 'react'
import {Outlet, Link } from 'react-router-dom'
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
        <Link to="/"className='MapMenu'>Home</Link>
       
        <Link to="/menu" className='MapMenu'>Menu</Link>
        
        <Link to="/book" className='MapMenu'>Book</Link>
        
        {/* <Outlet/> */}
      </RightMenu>
      <BurgerMenu className="BMenu" >
        {open ? <MdClose onClick={() => setOpen(!open)} /> : <RxHamburgerMenu onClick={() => setOpen(!open)} />}
      </BurgerMenu>
      <Drop>
        {open ?
        <div>
          <Link to="/" className='MapMinMenu'>Home</Link>
       
       <Link to="/menu" className='MapMinMenu'>Menu</Link>
       
       <Link to="/book" className='MapMinMenu'>Book</Link>
             </div>
             :""}
      </Drop>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display:flex;
  width:100vw;
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
@media(max-width:605px){
  width:100vw;
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
      font-family: "Bradley Hand", cursive;
      color:white;
      padding:0.7rem;
    }
`

const RightMenu = styled.div`
    display: flex;
    justify-content:space-between;
    color:white;
    right:0;
    padding: 2rem 2rem;
    @media(max-width: 768px){
      display:none;
    }
    // background-color:black;
    Link{
      padding: 2rem 2rem;
      color:white;
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