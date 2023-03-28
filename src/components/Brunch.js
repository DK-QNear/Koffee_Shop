import React from 'react'
import image from '../files/brunch_image.jpg'
import styled from 'styled-components'
import { BrunchMenu } from './BrunchMenu'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Brunch() {

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
    return (
        <Container>
            <Divisions>
                <Back_Image style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', margin: '0', width: '80%',height:'80%' }} />
                <Menu>
                    <MenuWrap>
                        <h1>MyKoffee's BREAKFAST SPECIAL</h1>
                        {BrunchData}
                    </MenuWrap>
                </Menu>
            </Divisions>
            {/* <Parallax pages={1} >
                <Divisions>
                <ParallaxLayer offset={0} speed={0.3}>
                    <Back_Image  style={{ backgroundImage: `url(${image}`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', margin: '0' }} />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5} style={{paddingLeft:'30%',width:'40%'}}>
                    <Menu>
                        <MenuWrap>
                            <h1>MyKoffee's BREAKFAST SPECIAL</h1>
                            {BrunchData}
                        </MenuWrap>
                    </Menu>
                </ParallaxLayer>
                </Divisions>
            </Parallax> */}
        </Container>
    )
}

const Container = styled.div`
// padding:2rem 16rem;
`
const Divisions = styled.div`
// align-item:center;
height:100vh;
padding:4rem 12rem;
position:relative;  
@media(max-width:748px){
    padding:0;
    display:flex;
    flex-direction:column;
}
`
const Back_Image = styled.div`
height:80vh;
`
const Menu = styled.div`
position:absolute;
top:6rem;
right:4rem;
width:50%;
// height:70%;
background-color:white;
box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
h1{
    font-family: rockwell;
    font-weight:lighter;
    text-align:center;
}
@media(min-width:748px){
    width:70%;
    top:6rem;
right:4rem;
}

`
const MenuWrap = styled.div`
padding:2rem 2rem;
`
const MenuTitle = styled.div`
    font-family:Lato;
    font-weight:bold;
    @media(max-width:748px){
        font-size:12.5px;
    }
`
const MenuDesc = styled.div`
    font-family:Lato;
    font-weight:lighter;
    text-align:start;
    font-size:12px;
    @media(max-width:748px){
        font-size:10px;
    }
    width:50vw;    
`

const MenuPrice = styled.div`
    font-weight:lighter;
    width:100px;
    @media(max-width:748px){
        font-size:12.5px;
    }
`