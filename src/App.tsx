import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Builder, Card, PopUpMsg } from './components';
import './App.css';
import { DetailsType } from './components/types';

function App() {
  let storedData = localStorage.getItem('profile');
  const initData =
    storedData !== null
      ? (JSON.parse(storedData) as DetailsType)
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

  const [details, setDetails] = useState<DetailsType>(initData);
  const [errMsg, setErrMsg] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');

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

  const handleSubmitForm = (e: FormEvent, canSubmit: boolean) => {
    e.preventDefault();
    if (canSubmit) {
      try {
        localStorage.setItem('profile', JSON.stringify(details));
      } catch (e) {
        setErrMsg(e);
      }
      setSuccessMsg('Congratulations! Your hCard is created.');
    }
  };

  return (
    <div className='app-wrapper'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>hCard Builder</title>
      </Helmet>
      <Card details={details} />
      <Builder
        details={details}
        onUpdate={(e: ChangeEvent) => handleUpdateDetails(e)}
        onUpload={(type: string, value: string) =>
          handleUploadFiles(type, value)
        }
        onSubmit={(e: FormEvent, canSubmit: boolean) =>
          handleSubmitForm(e, canSubmit)
        }
      />
      {errMsg !== '' && (
        <PopUpMsg message={errMsg} onClose={() => setErrMsg('')} />
      )}
      {successMsg !== '' && (
        <PopUpMsg
          msgType='Success'
          color='#1E90FF'
          message={successMsg}
          onClose={() => setSuccessMsg('')}
        />
      )}
    </div>
  );
}

export default App;
