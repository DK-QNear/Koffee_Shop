import React from 'react'
import styled from 'styled-components'
function FirstText() {
    return (
        <Para>
            <p>
            MyKofee Shop Cafe mission is to provide the highest quality food and beverage especially the coffee
            market for a reasonable price and homemade products. Our cafe wants to be in the business
            of helping the customers to relieve their daily stresses activity by providing piece of mind through great
            ambience, convenient location and the best customer service. The Cafe also has a mission and plan
            to provide job opportunities for community especially to local people.
            </p>
        </Para>
    )
}

export default FirstText

const Para=styled.div`
    margin: 2rem;
    overflow: hidden;
    text-align:center;
    p{
        text-align:center;
        font-family: "Bradley Hand", cursive;
    }
`