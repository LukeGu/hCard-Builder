import { ValidationType } from '../types';

export const defaultValidation: ValidationType = {
  firstname: {
    condition: { required: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  lastname: {
    condition: { required: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  email: {
    condition: { required: true, isEmail: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  phone: {
    condition: { required: true, isNumeric: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  suite: {
    condition: { required: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  street: {
    condition: { required: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  stateNpostcode: {
    condition: { required: true, isStateNPostcode: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
  country: {
    condition: { required: true },
    checked: {
      isValid: true,
      errMsg: '',
    },
  },
};
