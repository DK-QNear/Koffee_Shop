import React from 'react'
import styled from 'styled-components'
import FirstText from './FirstText'
import First_Image from './First_Image.js'
import Second_Image from './Second_Image'
import SecondText from './SecondText'
import Third_Image from './Third_Image'
function Section(props) {
  return (
    <Wrap>
      {/* <video src={Video} muted loop autoPlay></video> */}
      <First_Image /> 
       <FirstText /> 
       <Second_Image/>
       <SecondText/>
       <Third_Image/>
    </Wrap >
  )
}

export default Section

const Wrap = styled.div`
position:absolute;
top:0;
overflow:hidden;
`