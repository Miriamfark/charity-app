import React from 'react'
import RecipientCard from './RecipientCard';

const RecipientList = ({ recipients, setRecipient }) => {

    let mappedRecipients
    if (recipients){
        mappedRecipients = recipients.map((recipient)=> {
        return <RecipientCard key={recipient.id} recipient={recipient} setRecipient={setRecipient} />
    })}
    

  return (
    <ul>{mappedRecipients}</ul>
  )
}

export default RecipientList