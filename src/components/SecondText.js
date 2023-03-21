import React from 'react'
import styled from 'styled-components'
import { MenuD } from './MenuD.js';
function SecondText() {
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
    return (
        <div>
            <MenuList>
                <h1>MyKoffee's BREAKFAST SPECIAL</h1>
                <MenuText>
                {menuData}
                </MenuText>
            </MenuList>
        </div>
    )
}

export default SecondText

const MenuList = styled.div`
    overflow: hidden;
    h1{
        font-family: rockwell;
        font-weight:lighter;
        text-align:center;
    }
    
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
const MenuText = styled.div`
    padding: 0% 15%;

`