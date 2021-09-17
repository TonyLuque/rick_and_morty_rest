import styled, { css } from "styled-components";

export const _Container = styled.div`
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 8px;
  margin-right: 10px;
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
