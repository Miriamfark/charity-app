import React from 'react'
import { useParams } from 'react-router-dom'
import DonationForm from './DonationForm'

const RecipientFullCard = ({ recipients }) => {

    const { id } = useParams()
    const recipient = recipients?.filter((recipient) => recipient.id == id)[0]

    return (
    
     <div className="card">
          <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={recipient && recipient.logo} alt="recipient-logo"/>
          <h2>{recipient && recipient.name}</h2>
          <h6>{recipient && recipient.category}</h6>
          <h5>${recipient && recipient.sum_donations} out of ${recipient && recipient.fundraising_goal} collected.</h5>
        </div>
        <div className="card-content">
          <p>{recipient && recipient.description}</p>
        </div>
        <div className="card-action">
            <DonationForm recipient={recipient} />
        </div>
      </div>
    </div>
  </div>

        </div>
    
  )
}

export default RecipientFullCard