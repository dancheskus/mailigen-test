import React, { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type='text' value={email} onChange={({ target: { value } }) => setEmail(value)} />
      </label>
      <label>
        Name:
        <input type='text' value={name} onChange={({ target: { value } }) => setName(value)} />
      </label>
      <label>
        Surname:
        <input type='text' value={surname} onChange={({ target: { value } }) => setSurname(value)} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};
