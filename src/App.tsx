import React, { ChangeEvent, useState } from 'react';
import { Builder, Card } from './components';
import './App.css';
import { DetailsInterface } from './components/types';

function App() {
  const [details, setDetails] = useState<DetailsInterface>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    suite: '',
    street: '',
    stateNpostcode: '',
    country: '',
    avatar: '',
    coverImg: '',
  });
  const handleUpdateDetails = (e: ChangeEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    let newValue = element.value;
    setDetails({
      ...details,
      [element.name]: newValue,
    });
  };

  const handleUploadFiles = (type: string, value: string) => {
    setDetails({
      ...details,
      [type]: value,
    });
  };

  return (
    <div className='app-wrapper'>
      <Card details={details} />
      <Builder
        details={details}
        onUpdate={(e: ChangeEvent) => handleUpdateDetails(e)}
        onUpload={(type: string, value: string) =>
          handleUploadFiles(type, value)
        }
      />
    </div>
  );
}

export default App;
