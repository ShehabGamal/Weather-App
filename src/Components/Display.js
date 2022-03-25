import React from "react";
import styled from "styled-components";
import "weather-icons/css/weather-icons.css"

const BasicDiv = styled.div`
display:flex;
margin:0 auto;
justify-content: center;
align-items:center;
flex-direction:column;
`;
const BasicDivChild=styled(BasicDiv)`
flex-direction:row;
`;
const BasicDisplay = styled.div`
  font-size: 6.29vh;
  font-family: sans-serif;
  color: ${(props) => props.theme.SecondaryColor};
  margin: 15%;
  width:100%;
`;
const BasicDisplay2=styled(BasicDisplay)`
font-size:4.4vh;
`;
function Display(props) {
  return (
    <BasicDiv>
      <BasicDivChild>
      {props.info.name && (
        <BasicDisplay>{props.info.name}</BasicDisplay>
      )}
      {props.info.sys && props.info.sys.country && (
        <BasicDisplay>{props.info.sys.country}</BasicDisplay>
      )}
      </BasicDivChild>
      <BasicDivChild>
      <BasicDisplay>
      <i className={`wi ${props.ClassName}`}></i>
      </BasicDisplay>
      </BasicDivChild>
      <BasicDivChild>
      {props.info.main && props.info.main.temp && (
        <BasicDisplay>{Math.floor(props.info.main.temp - 273.15)}°</BasicDisplay>
      )}
      </BasicDivChild>
      <BasicDivChild>
      {props.info.main && props.info.main.temp_min && (
        <BasicDisplay2>{Math.floor(props.info.main.temp_min - 273.15)}°</BasicDisplay2>
      )}{props.info.main && props.info.main.temp_max && (
        <BasicDisplay2>{Math.floor(props.info.main.temp_max - 273.15)}°</BasicDisplay2>
      )}
      </BasicDivChild>
      {props.info.weather &&
        props.info.weather.map((obj) => obj.description) && (
    
          <BasicDisplay>
           {props.info.weather.map((obj) => obj.description)}
          </BasicDisplay>
          
        )}

      
    </BasicDiv>
  );
}

export default Display;
