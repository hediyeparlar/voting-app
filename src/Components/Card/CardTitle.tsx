import React from "react";
import styled from "styled-components";

type CardTitleProps = { text: string };
const StyledCardTitle = styled.div`
  color: #25ad43;
  font-weight: bolder;
  border-bottom: 1px solid #25ad43;
  & > p {
    text-align: center;
    font-size: 18px;
  }
`;
function CardTitle(props: CardTitleProps) {
  return (
    <StyledCardTitle>
      <p>{props.text}</p>
    </StyledCardTitle>
  );
}

export default CardTitle;
