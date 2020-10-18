enum PropertyName {
  firstname = 'firstname',
  lastname = 'lastname',
  email = 'email',
  phone = 'phone',
  suite = 'suite',
  street = 'street',
  stateNpostcode = 'stateNpostcode',
  country = 'country',
  avatar = 'avatar',
  coverImg = 'coverImg',
}

export type DetailsType = {
  [key in PropertyName]: string;
};

export interface ValidationConditionInterface {
  required?: boolean;
  isEmail?: boolean;
  isNumeric?: boolean;
  isStateNPostcode?: boolean;
}
export interface ValidationInterface {
  condition: ValidationConditionInterface;
  checked: {
    isValid: boolean;
    errMsg: string;
  };
}

export type ValidationType = {
  [key in PropertyName]?: ValidationInterface;
};
