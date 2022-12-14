import React from 'react'
import { Link } from 'react-router-dom'
import RecipientFullCard from './RecipientFullCard'


const RecipientCard = ({ recipient }) => {

  return (
  <div className="row">
  <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={recipient.logo} alt="recipient"/> 
        <h3>{recipient.name}</h3> 
        <h5>{recipient.category}</h5>
      <div className="card-content">
        <p>{recipient.description}</p>
        <span>{`Fundraising Goal: $${recipient.fundraising_goal}.00`}</span>
        <div>
          <Link className="btn" to={`/recipients/${recipient.id}`} element={<RecipientFullCard recipient={recipient} />}>View More</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
  

export default RecipientCard