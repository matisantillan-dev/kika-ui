import React from "react"
import styled from "styled-components"

//styles
import "./button.styles.css"

interface Props {
  color?: string
  size?: string
  variant?: string
  className?: string
}

const ButtonHelper: React.FC<Props> = ({
  color,
  size,
  variant,
  children,
  className,
}) => {
  return (
      <button className={className}>{children}</button>
  )
}

export const Button = styled(ButtonHelper)`
  border: ${(props) => (props.color ? `2px solid ${props.color}` : null)};
  background: white;
  color: ${(props) => (props.color ? props.color : "white")};
  border-radius: 8px;
  position: relative;
  font-weight: bold;
  padding: 8px 16px;
  margin: .5%;
  outline: none;
  z-index: 3;
  &:hover {
    color: #f1f1f1;
  }
  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 100%;
    background: ${(props) =>
      props.variant !== 'solid' && props.color ? props.color : "white"};
    color: #f1f1f1;
    transition: 0.3s ease-in;
  }
  &:hover:before {
    right: 0;
  }
`
