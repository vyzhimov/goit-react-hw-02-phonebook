import styled from '@emotion/styled';

export const ContactList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 20px 0;
  width: 90%;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc((100% - 20px) / 2);
  padding: 15px;
  padding-bottom: 15px;
  background-color: #4d7b94;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
`;

export const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DeleteBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 5px;
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
    color: red;
  }
`;

export const ContactInfo = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
