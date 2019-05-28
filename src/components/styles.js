import styled from 'styled-components';

export const BG = styled.div`
  height: 100vh;
  background-color: #f1f1f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 100;
  font-size: 2.5rem;
  padding-bottom: 10px;
`;

export const FormContainer = styled.div`
  input:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.h4`
  width: 100%;
  font-weight: 400;
  color: ${({ emailEmpty }) => emailEmpty && 'red'};
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px;
  border-radius: 4px;
  border: 2px solid #ddd;
  outline: none;
`;

export const SubmitButton = styled.div`
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

export const EmailError = styled.div`
  color: red;
`;
