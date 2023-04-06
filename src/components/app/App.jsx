import React, { Component } from 'react';
import ContactForm from 'components/contactForm';
import { nanoid } from 'nanoid';
import { ContactsList } from 'components/contactsList';
import { Filter } from 'components/filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter } = this;

    const normilizedFilter = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(
      contact =>
        contact.name.toLocaleLowerCase().includes(normilizedFilter) ||
        contact.number.toLocaleLowerCase().includes(normilizedFilter)
    );

    return (
      <div>
        <ContactForm onSubmit={addContact} />
        <Filter valuer={filter} onChange={changeFilter} />
        <ContactsList contacts={filteredContacts} />
      </div>
    );
  }
}
