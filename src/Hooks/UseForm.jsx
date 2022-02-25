import { useState } from 'react';

export default function useForm(inputs = {}) {
  // use this formState so that we can keep track of all our different input states with one variable. It connects to our inputs by their respective names

  const [formState, setFormstate] = useState(inputs);
  const [formError, setFormError] = useState();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormstate((prevState) => {
      // use property accessor, [name]:, to have dynamically generated keys and gain access to an objects properties using dot or bracket notation

      return { ...prevState, [name]: value };
    });
  };

  const clearForm = () => {
    setFormstate(inputs);
  };

  return { formState, formError, setFormError, clearForm, handleFormChange };
}
