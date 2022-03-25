import React, { useState,useEffect} from "react";
import Form from "./Components/Form.js";
import Display from "./Components/Display.js";
import styled from "styled-components";
import Background from "./Assets/Background.png"
import "weather-icons/css/weather-icons.css"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Background});
  height: 100vh;
  flex-direction:column;
  overflow: hidden;
`;
const Header= styled.header`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  `;

function App() {
  const [info, setInfo] = useState([]);
  const RangeID = info.weather && info.weather[0] && info.weather[0].id;
  const weatherIcon={
    Thunderstorm:"wi-thunderstorm",
    Drizzle:"wi-sleet",
    Rain:"wi-storm-showers",
    Snow:"wi-snow",
    Atmosphere:"wi-fog",
    Clear:"wi-day-sunny",
    Clouds:"wi-day-fog"
  }
  
  const [ClassName,setClassName]=useState("");
  
  const getWeatherIcon = (RangeID)=>{
    switch(true){
      case RangeID>=200 && RangeID<=232:
      setClassName(weatherIcon.Thunderstorm);
      break;
      case RangeID>=300 && RangeID<=321:
      setClassName(weatherIcon.Drizzle);
      break;
      case RangeID>=500 && RangeID<=531:
      setClassName(weatherIcon.Rain);
      break;
      case RangeID>=600 && RangeID<=622:
      setClassName(weatherIcon.Snow);
      break;
      case RangeID>=700 && RangeID<=781:
      setClassName(weatherIcon.Atmosphere);
      break;
      case RangeID===800:
      setClassName(weatherIcon.Clear);
      break;
      case RangeID>=801 && RangeID<=804:
      setClassName(weatherIcon.Clouds);
      break;
      default:
      setClassName(weatherIcon.Clouds);
    }
   }
   useEffect(() => {
    if(RangeID){getWeatherIcon(RangeID)}
  });
    const fetchData = (e) => {
      e.preventDefault();
      const City = e.target.elements.city.value;
      const Country = e.target.elements.country.value;
      const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&APPID=a474f8baa40ba792e93aae00f5aaa640`;
      fetch(API_KEY)
        .then((res) => res.json())
        .then((data) => setInfo(data))
        .catch((error) => console.log(error));
        document.getElementById('Input0').value="";
        document.getElementById('Input1').value="";
    };
  
  
  

  return (
    <Wrapper>
        <Header>
        <Form fetchData={fetchData}/>
        </Header>
        <Display info={info} weatherIcon={weatherIcon} ClassName={ClassName} />
    </Wrapper>
  );
}

export default App;
