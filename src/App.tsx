import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Builder, Card } from './components';
import './App.css';
import { DetailsInterface } from './components/types';

function App() {
  let storedData = localStorage.getItem('profile');
  const initData =
    storedData !== null
      ? (JSON.parse(storedData) as DetailsInterface)
      : {
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
        };

  const [details, setDetails] = useState<DetailsInterface>(initData);

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

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    // localStorage.setItem('profile', JSON.stringify(details));
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
        onSubmit={(e: FormEvent) => handleSubmitForm(e)}
      />
    </div>
  );
}

export default App;
