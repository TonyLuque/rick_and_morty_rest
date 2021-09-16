import styled from "styled-components";

export const _Container = styled.div`
  display: flex;
  flex-direction: row;
  algn-items: center;
  justify-content: center;
  width: 500px;
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px;
  background-color: black;
  color: white;
`;

export const _Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  margin-left: 12px;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  ::placeholder {
    color: lightgray;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
