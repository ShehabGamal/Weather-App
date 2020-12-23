import React, { useState } from "react";
import Form from "./Components/Form.js";
import Display from "./Components/Display.js";
import styled from "styled-components";

const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${(props) => props.theme.MainColor};
  height: 100vh;
  overflow: hidden;
`;
const Container = styled.div`
  background: ${(props) => props.theme.FrontColor};
  height: 70vh;
  margin: 20% 20% 20% 20%;
  padding: 30px;
  width: 20%;
`;
const BasicHeader = styled.h2`
  color: ${(props) => props.theme.ExtraColor};
  font-size: 50px;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
`;

function App(props) {
  const [info, setInfo] = useState({});
  const fetchData = (e) => {
    e.preventDefault();
    const City = e.target.elements.city.value;
    const Country = e.target.elements.country.value;
    const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=a474f8baa40ba792e93aae00f5aaa640`;
    fetch(API_KEY)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
    document.getElementById("Input0").value = "";
    document.getElementById("Input1").value = "";
  };
  return (
    <Wrapper1>
      <Container>
        <BasicHeader>Weather App</BasicHeader>
        <Form fetchData={fetchData} />
        <Display info={info} />
      </Container>
    </Wrapper1>
  );
}

export default App;
