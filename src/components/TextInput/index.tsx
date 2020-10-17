import React from 'react';
import styled from 'styled-components';

type InputProps = {
  isShowWarning?: boolean;
};

const StyledInput = styled.input<InputProps>`
  display: flex;
  border-radius: 0.2rem;
  background-color: #fff;
  color: #343434;
  border: 1px solid #224275;
  /* width: 10rem; */
  opacity: 0.7;
  height: 2.5rem;
  padding: 0 0.8rem;
  transition: opacity 350ms;
  box-shadow: ${(props) =>
    props.isShowWarning ? '0px 0px 6px 2px rgba(250,15,15,1)' : 'none'};
  @media screen and (max-width: 35rem) {
    font-size: 16px;
  }
  &:focus {
    outline: unset;
  }
`;

const TextInput = (props: {
  name: string;
  value: string;
  type?: string;
  maxLength?: number;
  isShowWarning?: boolean;
  onChange: (e: React.ChangeEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onBlur?: () => void;
}) => (
  <StyledInput
    name={props.name}
    value={props.value}
    type={props.type}
    isShowWarning={props.isShowWarning}
    maxLength={props.maxLength}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown}
    onBlur={props.onBlur}
    autoComplete='off'
  />
);

export default TextInput;
