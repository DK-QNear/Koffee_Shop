import React from "react";
import styled from "styled-components";
import image from '../files/2image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const S_I = styled.div`
  width: 100vw;
  height: 70vh;
  display:flex;
  align-items:center
  justify-content:center;
  animation:zoom 1500ms;
  background-image: url(${props => props.imge}); no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 70vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
  @media screen and (max-width: 640px) {
   width: 100vw;
    height: 70vh;
    background-image: url(${props => props.imge}); no-repeat;
  }
`;

export default function Second_Image() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="animation" data-aos="zoom-in">
            <S_I
                imge={image}
            />
        </div>
    );
}