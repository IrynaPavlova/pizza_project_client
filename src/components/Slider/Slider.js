import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  display: block;
  min-width: 320px;
  height: 350px;
  background-color: grey;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

export default function Slider() {
  return (
    <SliderContainer>
      <h2>Here will be Slider</h2>
    </SliderContainer>
  );
}
