import React, { useState } from 'react';
import styled from 'styled-components';

const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const BG = styled.div`
  height: 100vh;
  background-color: #f1f1f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 100;
  font-size: 2.5rem;
  padding-bottom: 10px;
`;

const FormContainer = styled.div`
  input:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Label = styled.h4`
  width: 100%;
  font-weight: 400;
  color: ${({ emailEmpty }) => emailEmpty && 'red'};
`;

const Input = styled.input`
  width: 100%;
  padding: 13px;
  border-radius: 4px;
  border: 2px solid #ddd;
  outline: none;
`;

const SubmitButton = styled.div`
  width: 150px;
  height: 40px;
  background-color: #009cff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 20px;
  filter: brightness(100%);
  transition: filter 0.3s;
  cursor: pointer;

  :hover {
    filter: brightness(120%);
  }
`;

const EmailError = styled.div`
  color: red;
`;

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
