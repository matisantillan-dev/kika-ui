import React from "react"
import styled from "styled-components"

interface Props {
  color?: string
  size?: string
  variant?: string
  className?: string
}

const ButtonHelper: React.FC<Props> = ({ children, className }) => {
  return <button className={className}>{children}</button>
}

//component
export const Button = styled(ButtonHelper)`
  border: ${(props) => props.color && `2px solid ${props.color}`};
  background: ${(props) => (props.variant === "outline" ? "white" : props.color)};
  color: ${(props) => (props.color && props.variant === "outline" ? props.color : "white")};
  border-radius: 8px;
  position: relative;
  font-weight: bold;
  padding: 8px 16px;
  margin: 0.5%;
  outline: none;
  z-index: 3;

  &:hover {
    color: #f1f1f1;
    cursor: pointer;
  }
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 100%;
    background: ${(props) => props.color && props.color};
    color: #f1f1f1;
    transition: 0.3s ease-in;
  }
  &:hover:before {
    right: 0;
  }
`
