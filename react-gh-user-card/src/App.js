import React from "react";
import User from "./User";
import styled from "styled-components"

const Background = styled.div`
  background: lightskyblue;
  max-width: 80%;
  margin: 2% auto;
  border-radius: 20px;
  padding: 2%;
  filter: drop-shadow(10px 10px 20px black);
`;

const Title = styled.h1`
  font-weight: 300;
  letter-spacing: 10px;
  margin: 0 0 1%;
`;

function App() {
  return (
    <Background>
      <header>
        <Title>GitHub User Card</Title>
      </header>
      <User />
    </Background>
  );
}

export default App;