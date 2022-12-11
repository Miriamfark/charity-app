import React from 'react'
import RecipientCard from './RecipientCard';

const RecipientList = ({ recipients }) => {

        const mappedRecipients = recipients.map((recipient)=> {
        return <RecipientCard key={recipient.id} recipient={recipient} />
    })
  

  return (
    <ul>{mappedRecipients}</ul>
  )
}

export default RecipientList