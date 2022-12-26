import { useState } from 'react';
import { validate, Validator } from '../utils/validators.util';

export const useForm = (initialValues: any) => {
  const [formValues, setFormValues] = useState(initialValues);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>, validators: Validator[]) => {
    setFormValues({
      ...formValues,
      [e.target.id]: { value: e.target.value, isValid: validate(e.target.value, validators) },
    });
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>, validators: Validator[]) => {
    setFormValues({
      ...formValues,
      [e.target.id]: { value: e.target.value, isValid: validate(e.target.value, validators) },
    });
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: { value: e.target.checked, isValid: true },
    });
  };

  const selectFileHandler = (e: React.ChangeEvent<HTMLInputElement>, validators: Validator[]) => {
    if (!!e.target.files?.length) {
      setFormValues({
        ...formValues,
        [e.target.id]: { value: e.target.files[0], isValid: validate(e.target.value, validators) },
      });
    }
  };

  const clearValues = () => {
    setFormValues({ ...initialValues });
  };

  return { formValues, inputHandler, selectHandler, checkHandler, selectFileHandler, clearValues };
};
