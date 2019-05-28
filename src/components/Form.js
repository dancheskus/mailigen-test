import React, { useState } from 'react';
import { BG, Container, Title, FormContainer, Label, Input, SubmitButton, EmailError } from './styles';

const emailRegEx = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export default () => {
  const [email, setEmail] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if (!email) return setEmailEmpty(true);

    if (!email.match(emailRegEx)) return setEmailError(true);

    setSuccess(true);
  };

  return (
    <BG>
      <Container>
        <Title>{success ? 'Thank you!' : 'Please enter data'}</Title>

        {!success && (
          <>
            <FormContainer>
              <Label emailEmpty={emailEmpty}>Email Address *</Label>
              <Input
                type='text'
                value={email}
                onChange={({ target: { value } }) => {
                  setEmail(value);
                  setEmailEmpty(false);
                  setEmailError(false);
                }}
              />

              <Label>First Name</Label>
              <Input type='text' value={name} onChange={({ target: { value } }) => setName(value)} />

              <Label>Last Name</Label>
              <Input type='text' value={surname} onChange={({ target: { value } }) => setSurname(value)} />
            </FormContainer>

            <SubmitButton onClick={handleSubmit}>Subscribe</SubmitButton>

            {emailError && <EmailError>Email is not valid</EmailError>}
          </>
        )}
      </Container>
    </BG>
  );
};
