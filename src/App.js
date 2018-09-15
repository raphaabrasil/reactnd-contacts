import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts })
    })
  }

  removeContact = contact_to_delete => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact =>
        contact.id !== contact_to_delete.id
      )
    }))
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
