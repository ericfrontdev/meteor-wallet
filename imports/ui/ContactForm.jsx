import React, { useState } from 'react'
import { ContactsCollection } from '../api/ContactsCollection'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imageURL, setImageURL] = useState('')

  const saveContact = () => {
    ContactsCollection.insert({ name, email, imageURL })
    setName('')
    setEmail('')
    setImageURL('')
  }

  return (
    <>
      <h2>Contact Form</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input
            value={imageURL}
            type="text"
            id="imageURL"
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={saveContact}>
            Save Contact
          </button>
        </div>
      </form>
    </>
  )
}
