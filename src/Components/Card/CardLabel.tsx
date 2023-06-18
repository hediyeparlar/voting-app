import React from "react";
import styled, { keyframes, css } from "styled-components";

type CardLabelProps = {
  text: string | number;
  icon?: string;
  moveAnimation?: boolean;
  buttonContent?: boolean;
  boldGreenLabel?: boolean;
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
  boldGreenLabel?: boolean;
}>`
  display: flex;
  align-items: center;
  margin: 9px;
  justify-content: space-between;
  ${({ buttonContent }) =>
    buttonContent &&
    css`
      margin: 6px;
    `}
  .icon {
    ${({ moveAnimation }) =>
      moveAnimation &&
      css`
        animation: ${moveAnimationIcon} 1s infinite;
      `}
  }

  & > p {
    text-align: end;
    margin: initial;
    ${({ buttonContent }) =>
      buttonContent &&
      css`
        margin-left: 10px;
      `}
    ${({ boldGreenLabel }) =>
      boldGreenLabel &&
      css`
        font-weight: bolder;
        color: #2dc44d;
      `}
  }
`;

const CardLabel = (props: CardLabelProps) => {
  return (
    <StyledCardLabel
      moveAnimation={props.moveAnimation}
      buttonContent={props.buttonContent}
      boldGreenLabel={props.boldGreenLabel}
    >
      {props.icon && <i className={`icon ${props.icon}`} />}
      <p>{props.text}</p>
    </StyledCardLabel>
  );
};

export default CardLabel;
