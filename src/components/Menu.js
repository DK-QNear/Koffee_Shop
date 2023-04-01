import React from 'react'
import styled from 'styled-components'
import { MenuD } from './MenuD.js';
import { BrunchMenu } from './BrunchMenu.js';
import Fade from 'react-reveal/Fade';
import { CoffeeMenu } from './CoffeeMenu'
import { TeaMenu } from './TeaMenu'
import BackgroundImg from '../files/menuBackground.jpg'
function Menu() {
  const menuData = MenuD.map(({ id, title, desc, price }) => {
    return (
        <div className="MenuWrapper">
            <div className="MenuLHS">
                <MenuTitle>
                    {title}
                </MenuTitle>
                <MenuDesc>
                    {desc}
                </MenuDesc>
            </div>
            <MenuPrice>
                {price}
            </MenuPrice>    
        </div>
    )
})
const BrunchData = BrunchMenu.map(({ id, title, desc, price }) => {
  return (
      <div className="MenuWrapper">
          <div className="MenuDiv">
              <MenuTitle>
                  {title}
              </MenuTitle>
              <MenuDesc>
                  {desc}
              </MenuDesc>
          </div>
          <MenuPrice>
              {price}
          </MenuPrice>
      </div>
  )
})
const CoffeeData = CoffeeMenu.map(({ id, title, price }) => {
  return (
      <div className="MenuWrapper">
          <div className="MenuDiv">
              <MenuTitle>
                  {title}
              </MenuTitle>
          </div>
          <MenuPrice>
              {price}
          </MenuPrice>
      </div>
  )
})
const TeaData = TeaMenu.map(({ id, title, price }) => {
  return (
      <div className="MenuWrapper">
          <div className="MenuDiv">
              <MenuTitle>
                  {title}
              </MenuTitle>
          </div>
          <MenuPrice>
              {price}
          </MenuPrice>
      </div>
  )
})
  return (
    <div>
          <ImgDiv style={{backgroundImage: `url(${BackgroundImg})`, backgroundRepeat: 'no-repeat',backgroundSize:'cover',position:'fixed',zIndex:'-2', margin: '0'}}/>
        <Container>
        {/* <Container> */}
            <Fade bottom>
            <h1>MyKoffee Shop Menu</h1>
              <MainMenu>
                <h3>Our Specials</h3>
              {menuData}
              </MainMenu>
              <Brunch_Menu>
              <h3>Brunch & Breakfast</h3>
                {BrunchData}
              </Brunch_Menu>
              <CoffeeMnu>
                <h3>Coffee</h3>
                {CoffeeData}
              </CoffeeMnu>
              <TeaMnu>
                <h3>Tea</h3>
                {TeaData}
                </TeaMnu>
            </Fade>
        </Container>
    </div>
  )
}

export default Menu
 

const Container=styled.div`
padding:0 8rem;
// width:100%;
text-align:center;
color:white;
@media(max-width:768px){
  padding:0 0;
}
  h1{
    font-family: "Bradley Hand", cursive;
  }
  h3{
    text-decoration:underline;
  }
`

const MenuTitle = styled.div`
    font-family:Apple Chancery, cursive;
    font-weight:bold;
    @media(max-width:748px){
        font-size:12.5px;
    }
`
const MenuDesc = styled.div`
    font-family:Lato;
    // font-weight:lighter;
    text-align:start;
    @media(max-width:748px){
        font-size:10px;
    }
    width:50vw;    
`

const MenuPrice = styled.div`
    // font-weight:lighter;
    width:100px;
    @media(max-width:748px){
        font-size:12.5px;
    }
`

const MainMenu=styled.div`
// box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
   
`

const Brunch_Menu=styled.div`
// box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);

`
const CoffeeMnu=styled.div`
// box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);

`
const TeaMnu=styled.div`
`
const ImgDiv=styled.div`
height:100vh;
width:100vw;
`