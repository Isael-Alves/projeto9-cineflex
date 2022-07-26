import styled from "styled-components";
import React from "react";
// import HomeScreen from "./HomeScreen";
import TimeScreen from "./TimeScreen";

export default function App() {
  const [phases, setPhases] = React.useState("Selecione o filme");

  return (
    <Body>
      <Header>CINEFLEX</Header>
      <Phase>{phases}</Phase>
      {/* <HomeScreen /> */}
      <TimeScreen setPhases={setPhases}/>
    </Body>
  );
}
const Body = styled.div`
  display: flex;
  justify-content: center;
`;
const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 67px;
  left: 0;
  top: 0;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;

  color: #e8833a;
`;

const Phase = styled.article`
  position: fixed;
  width: 100%;
  height: 110px;
  left: 0;
  top: 67px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
