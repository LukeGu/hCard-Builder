import React, { useState } from 'react';

import Input from './index';
import { Wrapper, Label, TextContainer, WarningMsg } from './styled';

interface FormInputInterface {
  title: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent) => void;
}

function FormInput(props: FormInputInterface) {
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false);
  return (
    <Wrapper>
      <Label htmlFor={props.name}>{props.title}</Label>
      <TextContainer>
        <Input
          name={props.name}
          value={props.value}
          type={props.type}
          //   maxLength={10}
          isShowWarning={isShowWarning}
          //   onKeyDown={(e: KeyboardEvent) => handleInput(e)}
          onChange={props.onChange}
          //   onBlur={() => setIsShowWarning(false)}
        />
        {isShowWarning && (
          <WarningMsg>The text input limits 10 characters.</WarningMsg>
        )}
      </TextContainer>
    </Wrapper>
  );
}

export default FormInput;
