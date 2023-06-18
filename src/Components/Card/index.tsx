import { ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children?: ReactNode;
  Bordered?: boolean | undefined;
  onClick?: () => void;
  profileCard?: boolean;
  noClickable?: boolean;
}

const StyledCard = styled.div<{
  profileCard?: boolean;
  noClickable?: boolean;
}>`
  display: table-cell;
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 2px;
  border: 1.8px solid rgb(45, 196, 77);
  max-height: 180px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  margin: auto;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 7px 24px 6px;
    background-color: ;
  }
  ${({ profileCard }) =>
    profileCard &&
    css`
      display: block;
      max-height: max-content;
    `}
  ${({ noClickable }) =>
    noClickable &&
    css`
      &:hover {
        cursor: auto;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 7px 24px 6px;
        background-color: ;
      }
    `}
`;

function Card({ children, ...CardProps }: Props): ReactElement {
  return <StyledCard {...CardProps}>{children}</StyledCard>;
}

export default Card;
