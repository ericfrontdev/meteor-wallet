import React from 'react'
import { useTracker } from 'meteor/react-meteor-data'
import { ContactsCollection } from '../api/ContactsCollection'

export default function ContactList() {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch()
  })
  return (
    <>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  )
}
