import React from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#2dc44d")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  margin: auto;
  padding:4px;
  margin-top:10px;
  margin-bottom:10px;

  &:hover {
    background-color: rgb(45, 166, 77);
    border-color: rgb(45, 196, 77);
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
