import { useState } from 'react';

export const useForm = (initialValues: any) => {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return { formValues, changeHandler };
};
