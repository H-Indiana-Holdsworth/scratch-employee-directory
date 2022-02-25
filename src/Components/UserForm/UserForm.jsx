import React, { useState } from 'react';
import useForm from '../../Hooks/UseForm';

export default function UserForm({ label, onSubmit }) {
  const { formState, formError, handleFormChange, setFormError } = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setFormError('');
      if (!email || password.length < 8)
        throw new Error('An email and a password longer than 8 characters are required');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setFormError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>{label}</legend>
      <label>Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formState.email}
        onChange={handleFormChange}
      />

      <label>Password</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formState.password}
        onChange={handleFormChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : label}
      </button>
      {formError && <p>{formError}</p>}
    </form>
  );
}
