import React from "react";
import styled from "styled-components";

const BasicInput = styled.input`
  width: 95%;
  background: transparent;
  border: 0;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${(props) => props.theme.SecondaryColor};
    font-size: 25px;
  }
  padding: 10px;
  text-align: center;
  font-size: 25px;
  margin: 5% auto;
  letter-spacing: 2px;
`;
const ExBasicInput = styled(BasicInput)`
  width: 50%;
  background: ${(props) => props.theme.BackColor};
  color: ${(props) => props.theme.FrontColor};
  border-radius: 10px;
`;
function Form(props) {
  return (
    <form onSubmit={props.fetchData}>
      <BasicInput type="text" name="city" id="Input0" placeholder="Type City" />
      <BasicInput
        type="text"
        name="country"
        id="Input1"
        placeholder="Type Country"
      />
      <ExBasicInput type="submit" value="Get Weather!!" />
    </form>
  );
}

export default Form;
