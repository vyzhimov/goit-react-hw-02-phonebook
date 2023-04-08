import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
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

export const FilterLabel = styled.label`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  width: 100%;
`;

export const FilterInput = styled.input`
  border-radius: 5px;
  border: none;
  height: 30px;
  width: 70%;
  padding: 5px;
  font-size: 16px;
`;
