import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { BsPersonCircle } from 'react-icons/bs';
import { GiRotaryPhone } from 'react-icons/gi';

import {
  ContactList,
  ContactItem,
  ContactCard,
  DeleteBtn,
  ContactInfo,
} from './ContactList.styled';

export default class ContactsList extends Component {
  render() {
    const { deleteContact } = this.props;
    return (
      <ContactList>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactCard>
                <ContactInfo>
                  <BsPersonCircle />
                  {name}
                </ContactInfo>
                <ContactInfo>
                  <GiRotaryPhone />
                  {number}
                </ContactInfo>
              </ContactCard>

              <DeleteBtn onClick={() => deleteContact(id)}>
                <RiDeleteBin3Line fill="currentColor" size="1.2rem" />
                Delete
              </DeleteBtn>
            </ContactItem>
          );
        })}
      </ContactList>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
