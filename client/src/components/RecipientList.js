import React, { useState, useEffect } from 'react'

const RecipientList = () => {

    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
      fetch("/recipients")
        .then((r) => r.json())
        .then(setRecipients);
    }, []);

    console.log(recipients)

    // let mappedRecipients
    // if (recipients){
    //     mappedRecipients = recipients.map((recipient)=> {
    //     <li>{recipient.name}</li>
    // })}
    

  return (
    <ul>Recipient List</ul>
  )
}

export default RecipientList