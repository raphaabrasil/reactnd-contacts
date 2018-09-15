import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'

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

    ContactsAPI.remove(contact_to_delete)
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts
            onDeleteContact={ this.removeContact }
            contacts={ this.state.contacts }
          />
        )} />
        <Route path="/create" component={ CreateContact } />
      </div>
    )
  }
}

export default App;
