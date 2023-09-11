import React from 'react';
import styled from "styled-components";

const Foot = styled.footer`
  height: 80px;
  width: 100vw;
  background-color: black;
  padding: 0px;
  position: fixed;
  bottom: 0px;
  left: 0px;

`;

export default function Footer() {
  return (
    <Foot>
      <h2>Footer</h2>
    </Foot>
  )
};
