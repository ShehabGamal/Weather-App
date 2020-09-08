import React from "react";
import styled from "styled-components";

const BasicDisplay = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  color: ${(props) => props.theme.SecondaryColor};
  font-weight: bold;
  margin: 10%;
`;
function Display(props) {
  return (
    <div>
      {props.info.name && (
        <BasicDisplay>City Name : {props.info.name}</BasicDisplay>
      )}
      {props.info.sys && props.info.sys.country && (
        <BasicDisplay>Country Name : {props.info.sys.country}</BasicDisplay>
      )}
      {props.info.weather &&
        props.info.weather.map((obj) => obj.description) && (
          <BasicDisplay>
            Weather : {props.info.weather.map((obj) => obj.description)}
          </BasicDisplay>
        )}
      {props.info.main && props.info.main.temp && (
        <BasicDisplay>Temperature : {props.info.main.temp}</BasicDisplay>
      )}
      {props.info.main && props.info.main.humidity && (
        <BasicDisplay>Humidity : {props.info.main.humidity}</BasicDisplay>
      )}
      {props.info.main && props.info.main.pressure && (
        <BasicDisplay>Pressure : {props.info.main.pressure}</BasicDisplay>
      )}
    </div>
  );
}

export default Display;
