import React from "react";
import styled, { keyframes, css } from "styled-components";

type CardLabelProps = {
  text: string | number;
  icon?: string;
  moveAnimation?: boolean;
  buttonContent?: boolean;
};

const moveAnimationIcon = keyframes`
  0% {
    transform: rotate(-20deg);  
}
  50% {
    transform: rotate(0deg); 
 }
  100% {
    transform: rotate(20deg); 
     }
`;

const StyledCardLabel = styled.div<{
  moveAnimation?: boolean;
  buttonContent?: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 0px 3px;
  justify-content: space-between;
  .icon {
    ${({ moveAnimation }) =>
      moveAnimation &&
      css`
        animation: ${moveAnimationIcon} 1s infinite;
      `}
  }

  & > p {
    text-align: center;
    margin: auto;
    ${({ buttonContent }) =>
      buttonContent &&
      css`
        margin-left: 10px;
      `}
  }
`;

const CardLabel = (props: CardLabelProps) => {
  return (
    <StyledCardLabel
      moveAnimation={props.moveAnimation}
      buttonContent={props.buttonContent}
    >
      {props.icon && <i className={`icon ${props.icon}`} />}
      <p>{props.text}</p>
    </StyledCardLabel>
  );
};

export default CardLabel;
