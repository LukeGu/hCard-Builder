import React, { useState, useEffect } from 'react';

import Input from './index';
import { Wrapper, Label, TextContainer, WarningMsg } from './styled';
import { ValidationInterface } from '../types';
import { checkValidity } from '../../utils/index';

interface FormInputInterface {
  title: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
  validation?: ValidationInterface;
}

function FormInput({
  title,
  name,
  type,
  value,
  onChange,
  validation,
}: FormInputInterface) {
  const [valid, setValid] = useState<{ isValid: boolean; errMsg: string }>(
    validation
      ? validation.checked
      : {
          isValid: true,
          errMsg: '',
        }
  );
  useEffect(() => {
    if (validation) setValid(validation.checked);
  }, [validation]);

  const handleValidation = () => {
    if (validation && Object.keys(validation).length > 0)
      setValid(checkValidity(value, validation.condition));
  };

  return (
    <Wrapper>
      <Label htmlFor={name}>{title}</Label>
      <TextContainer>
        <Input
          name={name}
          value={value}
          type={type}
          isShowWarning={!valid.isValid}
          onChange={onChange}
          onBlur={handleValidation}
        />
        {!valid.isValid && <WarningMsg>{valid.errMsg}</WarningMsg>}
      </TextContainer>
    </Wrapper>
  );
}

export default FormInput;
