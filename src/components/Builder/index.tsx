import React, { ChangeEvent, FormEvent } from 'react';
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
  onSubmit,
}: {
  details: DetailsInterface;
  onUpdate: (e: ChangeEvent) => void;
  onUpload: (type: string, value: string) => void;
  onSubmit: (e: FormEvent) => void;
}) {
  // const [validation, setValidation] = useState({
  //   firstname: {
  //     condition: { required: true },
  //     checked: {
  //       isValid: true,
  //       errMsg: '',
  //     },
  //   },
  // });
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
    if (files) {
      // console.log('file size', files[0].size);
      reader.onload = () => {
        uploadedFile = reader.result as string;
        onUpload(uploadType, uploadedFile);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    // Object.keys(details).forEach((key:string) => {
    //   // if (details[key])
    //   console.log(key, getProperty(details, key));
    // });
    onSubmit(e);
  };

  return (
    <Wrapper>
      <Header>Profile builder</Header>
      <Form onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <Section>
          <SectionTitle>Personal details</SectionTitle>
          <FormInput
            title='first name'
            name='firstname'
            type='string'
            value={details.firstname}
            // validation={validation.firstname}
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
              + Profile picture
            </Button>
            <Button onClick={(e: any) => handleClick(e, 'coverImg')}>
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
          <Button type='submit' bgColor='#224275' color='#fff' width='100%'>
            Create profile
          </Button>
        </Section>
      </Form>
    </Wrapper>
  );
}

export default Builder;
