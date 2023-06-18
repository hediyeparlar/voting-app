import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  Bordered?: boolean | undefined;
}

const StyledCard = styled.div`
  width: 70%;
  /* max-height: 19vh; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 2px;
  display: flex;
  border: 1.8px solid rgb(45, 196, 77);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  margin: auto;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 7px 24px 6px;
    background-color: ;
  }
`;

function Card({ children, ...CardProps }: Props): ReactElement {
  return <StyledCard {...CardProps}>{children}</StyledCard>;
}

export default Card;
