import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
min-width: 320px;
padding 30px 20px 40px;

`;

const ProductContainer = ({ children }) => <Container>{children}</Container>;

export default ProductContainer;
