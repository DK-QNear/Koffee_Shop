import React from "react";
import styled from "styled-components";
import image from '../files/1stImage.jpg';

const F_I = styled.div`
  width: 100v;
  height: 100vh;
  animation:zoom 1500ms;
  background-image: url(${props => props.imge}); no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
  @media screen and (max-width: 640px) {
   width: 100vw;
    height: 100vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
`;

export default function First_Image() {
  return (
    <div className="App">
      <F_I
        imge={image}
      />
    </div>
  );
  }