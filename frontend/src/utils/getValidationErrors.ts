import * as yup from 'yup';

interface Error {
  [key: string]: string;
}

function getValidationErrors(err: yup.ValidationError) {
  const errors: Error = {};
  err.inner.forEach(error => {
    errors[error.path] = error.message;
  });
  return errors;
}

export default getValidationErrors;
