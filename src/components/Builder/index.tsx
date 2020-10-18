import React, { ChangeEvent, FormEvent, useState } from 'react';
// components
import { PopUpMsg, SquareButton as Button } from '../index';
import FormInput from '../TextInput/FormInput';
import {
  Wrapper,
  Header,
  Section,
  SectionTitle,
  Form,
  ButtonGroup,
} from './styled';
// types
import { DetailsType, ValidationType } from '../types';
import { checkValidity } from '../../utils';
import { defaultValidation } from './const';

function Builder({
  details,
  onUpdate,
  onUpload,
  onSubmit,
}: {
  details: DetailsType;
  onUpdate: (e: ChangeEvent) => void;
  onUpload: (type: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  const [errMsg, setErrMsg] = useState<string>('');
  const [validation, setValidation] = useState<ValidationType>(
    defaultValidation
  );
  let uploadType = '';
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const handleClick = (e: any, type: string) => {
    e.preventDefault();
    uploadType = type;
    hiddenFileInput?.current?.click();
  };

  const handleUpload = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;
    const reader = new FileReader();
    let uploadedFile = '';
    if (files && files[0].size < 2000000) {
      console.log('file size', files[0].size);

      reader.onload = () => {
        uploadedFile = reader.result as string;
        onUpload(uploadType, uploadedFile);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setErrMsg(
        'The image is too large to upload it! The file size limit is 2MB.'
      );
    }
  };

  const handleSubmit = (e: FormEvent) => {
    let tmpValid = {};
    Object.keys(details).forEach((key) => {
      const curValid = validation[key as keyof DetailsType];
      if (curValid) {
        const curValue = details[key as keyof DetailsType];
        tmpValid = {
          ...tmpValid,
          [key]: {
            ...curValid,
            checked: checkValidity(curValue, curValid.condition),
          },
        };
      }
    });
    setValidation(tmpValid);
    onSubmit(e);
  };

  return (
    <Wrapper>
      <Header>Profile builder</Header>
      <Form onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <Section>
          <SectionTitle>Personal details</SectionTitle>
          <FormInput
            key='firstname'
            title='first name'
            name='firstname'
            type='string'
            value={details.firstname}
            validation={validation.firstname}
            onChange={onUpdate}
          />
          <FormInput
            key='lastname'
            title='last name'
            name='lastname'
            type='string'
            value={details.lastname}
            validation={validation.lastname}
            onChange={onUpdate}
          />
          <FormInput
            key='email'
            title='email'
            name='email'
            type='string'
            value={details.email}
            validation={validation.email}
            onChange={onUpdate}
          />
          <FormInput
            key='phone'
            title='phone number'
            name='phone'
            type='string'
            value={details.phone}
            validation={validation.phone}
            onChange={onUpdate}
          />

          <ButtonGroup>
            <Button
              key='avatar'
              width='45%'
              onClick={(e: any) => handleClick(e, 'avatar')}
            >
              + Profile picture
            </Button>
            <Button
              key='coverImg'
              width='45%'
              onClick={(e: any) => handleClick(e, 'coverImg')}
            >
              + Cover phote
            </Button>
            <input
              type='file'
              ref={hiddenFileInput}
              onChange={(e: ChangeEvent) => handleUpload(e)}
              style={{ display: 'none' }}
            />
          </ButtonGroup>
        </Section>
        <Section>
          <SectionTitle>Address</SectionTitle>
          <FormInput
            key='suite'
            title='suite / apt number'
            name='suite'
            type='string'
            value={details.suite}
            onChange={onUpdate}
          />
          <FormInput
            key='street'
            title='street number and name'
            name='street'
            type='string'
            value={details.street}
            onChange={onUpdate}
          />
          <FormInput
            key='stateNpostcode'
            title='state & postcode'
            name='stateNpostcode'
            type='string'
            value={details.stateNpostcode}
            validation={validation.stateNpostcode}
            onChange={onUpdate}
          />
          <FormInput
            key='country'
            title='country'
            name='country'
            type='string'
            value={details.country}
            onChange={onUpdate}
          />
          <Button type='submit' bgColor='#224275' color='#fff' width='100%'>
            Create profile
          </Button>
        </Section>
      </Form>
      {errMsg !== '' && (
        <PopUpMsg message={errMsg} onClose={() => setErrMsg('')} />
      )}
    </Wrapper>
  );
}

export default Builder;
