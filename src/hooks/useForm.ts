import { useState } from 'react';

export const useForm = (initialValues: any) => {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.checked });
  };

  const selectFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!e.target.files?.length) {
      console.log('File handler:', e.target.files[0]);
      setFormValues({ ...formValues, [e.target.id]: e.target.files[0] });
    }
  };

  const clearValues = () => {
    setFormValues({ ...initialValues });
  };

  return { formValues, changeHandler, selectHandler, checkHandler, selectFileHandler, clearValues };
};
