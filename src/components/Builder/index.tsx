import React, { ChangeEvent } from 'react';
// components
import { SquareButton as Button } from '../index';
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
import { DetailsInterface } from '../types';

function Builder({
  details,
  onUpdate,
  onUpload,
}: {
  details: DetailsInterface;
  onUpdate: (e: ChangeEvent) => void;
  onUpload: (type: string, value: string) => void;
}) {
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
    if (files) {
      const Uploadedfile = URL.createObjectURL(files[0]);
      onUpload(uploadType, Uploadedfile);
    }
  };

  return (
    <Wrapper>
      <Header>profile builder</Header>
      <Form>
        <Section>
          <SectionTitle>personal details</SectionTitle>
          <FormInput
            title='first name'
            name='firstname'
            type='string'
            value={details.firstname}
            onChange={onUpdate}
          />
          <FormInput
            title='last name'
            name='lastname'
            type='string'
            value={details.lastname}
            onChange={onUpdate}
          />
          <FormInput
            title='email'
            name='email'
            type='string'
            value={details.email}
            onChange={onUpdate}
          />
          <FormInput
            title='phone number'
            name='phone'
            type='string'
            value={details.phone}
            onChange={onUpdate}
          />

          <ButtonGroup>
            <Button onClick={(e: any) => handleClick(e, 'avatar')}>
              + profile picture
            </Button>
            <Button onClick={(e: any) => handleClick(e, 'coverImg')}>
              + cover phote
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
          <SectionTitle>address</SectionTitle>
          <FormInput
            title='suite / apt number'
            name='suite'
            type='string'
            value={details.suite}
            onChange={onUpdate}
          />
          <FormInput
            title='street number and name'
            name='street'
            type='string'
            value={details.street}
            onChange={onUpdate}
          />
          <FormInput
            title='state & postcode'
            name='stateNpostcode'
            type='string'
            value={details.stateNpostcode}
            onChange={onUpdate}
          />
          <FormInput
            title='country'
            name='country'
            type='string'
            value={details.country}
            onChange={onUpdate}
          />
          <Button bgColor='#224275' color='#fff' width='100%'>
            create profile
          </Button>
        </Section>
      </Form>
    </Wrapper>
  );
}

export default Builder;
