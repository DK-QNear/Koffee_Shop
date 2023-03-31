import React from 'react'
import styled  from 'styled-components'
import logo from '../files/logo.png'
export default function Footer() {
  return (
    <Container>
        <Wrapper>
        <First>
            <Log><img src={logo} height="100px" width="100px" />
                <text>My Koffee Shop</text>
            </Log>
            <p>Independent family coffee shop in the heart of Aldgate East, specializing in its love for good coffee and an amazing variety of dishes by sourcing the best and authentic ingredients.</p>
        </First>
        <Second>
            <h3>Hours</h3>
            <p>Monday-Saturday: 07:00am – 06:00pm</p>
            <p>Sunday: 07:00am – 05:00pm</p>
        </Second>
        <Third>
            <h3>FOLLOW US ON SOCIAL MEDIA</h3>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Welp</p>
        </Third>
        <Fourth>
            <h3>CONTACT INFO</h3>
            <p>Location</p>
            <p>+917978600681</p>
            <p>denishkerketta01@gmail.com</p>
            <p>https://dk-qnear.github.io/Koffee_Shop</p>
        </Fourth>
        </Wrapper>
    </Container>
  )
}
const Container = styled.div`
display:flex;
// justify-content:space-between;
background-color:#1a2e4f;
// height:30vh;
color:#D3D3D3;
font-family:DejaVu Sans Mono, monospace;
font-weight:lighter;
flex-wrap:wrap;
`
const Wrapper=styled.div`
    padding:2rem 2rem;
    display:flex;
`

const First=styled.div`
width:25%;
`
const Log=styled.div`
 display:flex;
 text{
    padding: 2.7rem 0;
 }
`
const Second=styled.div`
width:25%;

`
const Third=styled.div`
width:25%;

`
const Fourth=styled.div`
width:25%;

`