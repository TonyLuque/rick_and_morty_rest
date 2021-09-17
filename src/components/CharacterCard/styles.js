import styled, { css } from "styled-components";

export const _Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 326px;
  height: 140px;
  margin: 0px 22px 22px 0px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  float: left;
  cursor: pointer;
`;

export const _MiddleContainer = styled.div`
  width: 50%;
  heght: 100%;
  ${(props) =>
    props.padding &&
    css`
      padding: 16px 0 0 22px;
    `}
`;

export const _GroupText = styled.div`
  margin-bottom: 8px;
`;

export const _Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

export const _SmallText = styled.p`
  font-size: 10px;
  margin: 0px;
  padding-bottom: 2px;
  ${(props) =>
    props.title &&
    css`
      color: #828282;
    `};
`;

export const _MediumText = styled.p`
  font-size: 12px;
  margin: 0px;
`;

export const _LargeText = styled.p`
  font-size: 16px;
  margin: 0px;
`;
