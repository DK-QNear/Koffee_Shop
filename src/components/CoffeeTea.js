import React from 'react'
import styled from 'styled-components'
import { CoffeeMenu } from './CoffeeMenu'
import { TeaMenu } from './TeaMenu'
import image from '../files/Mocha.jpeg'
export default function CoffeeTea() {
    const CoffeeData = CoffeeMenu.map(({ id, title, price }) => {
        return (
            <div className="MenuWrapper">
                <div className="MenuDv">
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
                <div className="MenuDv">
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
        <Container>
            <Menu>
                <h1>CAFE</h1>
                <h2>Coffee</h2>
                {CoffeeData}
                <h2>Tea</h2>
                {TeaData}
            </Menu>
            <Background style={{ backgroundImage: `url(${image}`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', margin: '0', width: '80%', height: '80%' }} />
        </Container>
    )
}
const Container = styled.div`
height:100vh;
// width:100vw;
padding:4rem 12rem;
position:relative;  
@media(max-width:748px){
    padding:0;
    display:flex;
    flex-direction:column;
}
 `
const MenuTitle = styled.div`
 font-family:Lato;
 font-weight:lighter;
 @media(max-width:748px){
     font-size:12.5px;
 }
`
const MenuPrice = styled.div`
    font-weight:lighter;
    width:100px;
    @media(max-width:748px){
        font-size:12.5px;
    }
`
const Menu = styled.div`
width:50vw;
background-color:white;
height:90vh;
box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
h1{
    font-family: rockwell;
    font-weight:lighter;
    text-align:center;
    text-decoration:underline;    
}
h2{
    font-family:Lato;
    font-weight:normal;
    padding:0 2rem;
}
font-family:Lato;
font-weight:lighter;
@media(max-width:748px){
    heightL100vh;
}

`
const Background = styled.div`
height:90vh;
position:absolute;
z-index:-1;
top:6rem;
right:2rem;
@media(max-width:748px){
    position:relative;
}
`