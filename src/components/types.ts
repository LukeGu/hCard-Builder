export interface DetailsInterface {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  suite: string;
  street: string;
  stateNpostcode: string;
  country: string;
  avatar: string;
  coverImg: string;
}

export interface ValidationConditionInterface {
  required?: boolean;
  isEmail?: boolean;
  isNumeric?: boolean;
}
export interface ValidationInterface {
  condition: ValidationConditionInterface;
  checked: {
    isValid: boolean;
    errMsg: string;
  };
}

export interface ValidInterface {
  [key: string]: DetailsInterface;
  // [key: string]: DetailsInterface;
  // firstname?: ValidationInterface;
  // lastname?: ValidationInterface;
  // email?: ValidationInterface;
  // phone?: ValidationInterface;
  // suite?: ValidationInterface;
  // street?: ValidationInterface;
  // stateNpostcode?: ValidationInterface;
  // country?: ValidationInterface;
  // avatar?: ValidationInterface;
  // coverImg?: ValidationInterface;
}
