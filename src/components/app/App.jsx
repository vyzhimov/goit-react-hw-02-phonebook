import React, { Component } from 'react';
import ContactForm from 'contactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHadler = data => {
    console.log(data);
  };

  render() {
    return <ContactForm onSubmit={this.formSubmitHadler} />;
  }
}
