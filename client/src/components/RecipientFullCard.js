import React from 'react'
import { useParams } from 'react-router-dom'

const RecipientFullCard = ({ recipients }) => {

    const { id } = useParams()

    let filteredRecipient
    if(recipients) {
        filteredRecipient = recipients.filter((recipient) => {return recipient.id === id}) 
    }
   
  return (
     <div className="card">
        <div className="card-image">
            {/* <img src={recipient.logo} />
            <span>{recipient.name}</span>
            <div className="card-content">
                <p>{recipient.description}</p>
                <span>{`Fundraising Goal: $${recipient.fundraising_goal}.00`}</span> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default RecipientFullCard