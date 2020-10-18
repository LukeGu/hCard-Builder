import { ValidationConditionInterface } from '../components/types';

export const checkValidity = (
  value: string,
  rules: ValidationConditionInterface
) => {
  let isValid = true,
    errMsg = '';
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
    errMsg = 'This field is required.';
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
    errMsg = 'Please enter a valid email address.';
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
    errMsg = 'Please enter numbers only.';
  }
  if (rules.isStateNPostcode) {
    const pattern = /^[A-Z]{2,5}\s*[,]{1}\s*\d{4,10}$/;
    isValid = pattern.test(value) && isValid;
    errMsg = 'Please enter the correct format, (XXX, 0000).';
  }
  return { isValid, errMsg };
};
