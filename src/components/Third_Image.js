import React from 'react'
import styled from "styled-components";
import image from '../files/3rdimage.jpg';

const T_I = styled.div`
  width: 100v;
  height: 60vh;
  background-image: url(${props => props.imge}); no-repeat;
  background-size:cover;
  object-fit:none;
  object-position:-20% 50%;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 60vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
  @media screen and (max-width: 640px) {
   width: 100vw;
    height: 60vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
`;
export default function Third_Image() {
  return (
    <div className="App">
        <T_I
            imge={image}
        />
    </div>
  )
}


