import React from 'react';
import styled, { keyframes } from 'styled-components';

type ButtonProps = {
  bgColor?: string;
  color?: string;
  width?: string;
};

const shine = keyframes`
  from {
    opacity: 0;
    left: 0%;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    left: 100%;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  text-decoration: none;
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  display: inline-block;
  position: relative;
  text-align: center;
  width: ${(props) => props.width || 'auto'};
  background-color: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.color || '#224275'};
  border: ${(props) => `1px solid ${props.color || '#224275'}`};
  border-radius: 0.2rem;
  padding: 0.5rem;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
  &:hover {
    color: ${(props) => props.bgColor || '#fff'};
    border-color: ${(props) => props.bgColor || '#fff'};
    box-shadow: 0 0 30px 0 rgba(0, 199, 236, 0.5);
    background-color: ${(props) => props.color || '#224275'};
    transition: all 0.2s ease-out;
    &:before {
      animation: ${shine} 0.5s 0s linear;
    }
  }
  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
  &:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    transform: skewX(-20deg);
  }
`;

const SquareButton = (props: {
  onClick?: (e: any) => void;
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}) => (
  <StyledButton
    bgColor={props.bgColor}
    color={props.color}
    width={props.width}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </StyledButton>
);

export default SquareButton;
