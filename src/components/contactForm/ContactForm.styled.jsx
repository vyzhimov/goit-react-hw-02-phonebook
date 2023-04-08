import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #4d7b94;
  width: 90%;
  border-radius: 10px;
`;

export const FormContactLable = styled.label`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
`;

export const FormContactInput = styled.input`
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

export const FormContactBtn = styled.button`
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  padding: 20px;
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #0f3753;
  color: #fff;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: #0f3783;
    color: lawngreen;
  }
`;
