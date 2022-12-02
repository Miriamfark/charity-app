import React, { useState, useEffect } from 'react'
import RecipientCard from './RecipientCard';

const RecipientList = () => {

    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
      fetch("/recipients")
        .then((r) => r.json())
        .then(setRecipients);
    }, []);

    // console.log(recipients)

    let mappedRecipients
    if (recipients){
        mappedRecipients = recipients.map((recipient)=> {
            // console.log(recipient.name)
        return <RecipientCard recipient={recipient} />
    })}
    

  return (
    <ul>{mappedRecipients}</ul>
  )
}

export default RecipientList