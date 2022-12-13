import React, { useState } from 'react'
import NewRecipientForm from './NewRecipientForm';
import RecipientCard from './RecipientCard';

const RecipientList = ({ recipients, setRecipients }) => {

  const [showForm, setShowForm] = useState(false)

        const mappedRecipients = recipients.map((recipient)=> {
        return <RecipientCard key={recipient.id} recipient={recipient} />
    })
  

  return (
    <>
      <ul>{mappedRecipients}</ul>
      <p className="btn" onClick={()=>setShowForm(!showForm)} >Add Recipient</p>
      {showForm ? <NewRecipientForm recipients={recipients} setRecipients={setRecipients} /> : null }
    </>
  )
}

export default RecipientList