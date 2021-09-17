import styled from "styled-components";

export const _ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const _Close = styled.p`
  position: absolute;
  top: 0px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
`;

export const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 50px;
`;

export const _ImageProfile = styled.img`
  margin: 16px;
  height: 155px;
  width: 155px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 50%;
`;

export const _ContainerText = styled.div`
  width: 100%;
  text-align: left;
  align-self: start;
`;

export const _ContainerCardInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: space-around;
  align-content: space-around;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
`;
