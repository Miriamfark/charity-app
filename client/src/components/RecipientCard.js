import React from 'react'
import { Link } from 'react-router-dom'


const RecipientCard = ({ recipient, setRecipient }) => {

    setRecipient(recipient)

  return (
  <div className="row">
  <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={recipient.logo} />
        <span>{recipient.name}</span>
      <div className="card-content">
        <p>{recipient.description}</p>
        <span>{`Fundraising Goal: $${recipient.fundraising_goal}.00`}</span>
        <Link to={`/recipients/${recipient.id}`}>View More</Link>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
  

export default RecipientCard