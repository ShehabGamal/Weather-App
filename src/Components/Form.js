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
    font-size: 2.477vh;
  }
  padding: 0.991vh;
  text-align: center;
  font-size: 2.477vh;
  margin: 5% auto;
  letter-spacing: 0.198vh;
`;
const ExBasicInput = styled(BasicInput)`
  width: 50%;
  background: ${(props) => props.theme.BackColor};
  color: ${(props) => props.theme.FrontColor};
  border-radius: 0.991vh;
  @media (min-width: 280px) and (max-width: 1024px) {
    width: 80%;
  }
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
      <ExBasicInput type="submit" value="Get Weather!" />
    </form>
  );
}

export default Form;
