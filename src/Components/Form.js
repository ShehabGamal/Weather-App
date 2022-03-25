import React from "react";
import styled from "styled-components";

const BasicInput = styled.input`
  font-family:sans-serif;
  width: 25%;
  background: transparent;
  border: 0;
  border-bottom: solid rgba(255,255,255,0.6) 2px;
  &:focus {
    outline: none;
    border-bottom: solid ${props=>props.theme.SecondaryColor} 2px; 
  }
  ::placeholder {
    color: ${(props) => props.theme.SecondaryColor};
    font-size: 2.477vh;
    opacity:0.6;
  }
  padding: 0.991vh;
  text-align: center;
  font-size: 2.477vh;
  letter-spacing: 0.198vh;
  margin:3%;
  color: ${props=>props.theme.SecondaryColor};
  @media (max-width:400px) {
    width:50%;
  }
`;
const ExBasicInput = styled(BasicInput)`
  width:20%;
  background: ${(props) => props.theme.BackgroundColor};
  color: ${(props) => props.theme.MainColor};
  border-radius: 0.991vh;
  border:0;
  &:focus {
    outline: none;
    border:0;
  }
  @media (max-width:400px) {
    width:35%;
  }
`;
const FormFilling = styled.form`
display:flex;
justify-content:center;
align-items:center;
width:100%;
@media (max-width:400px) {
  flex-direction:column;
}
`;
function Form(props) {
  return (
    <FormFilling onSubmit={props.fetchData}>
      <BasicInput type="text" name="city" id="Input0" placeholder="Type City" />
      <BasicInput
        type="text"
        name="country"
        id="Input1"
        placeholder="Type Country"
      />
      <ExBasicInput type="submit" value="Get Weather!" />
    </FormFilling>
  );
}

export default Form;
