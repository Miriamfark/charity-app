import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DonationForm from './DonationForm'
import UpdateRecipient from './UpdateRecipient'

const RecipientFullCard = ({ 
    recipient, 
    recipients,
    setRecipients, 
    user, 
    setUser, 
    name,
    setName,
    category,
    setCategory,
    fundraisingGoal,
    setFundraisingGoal,
    logo,
    setLogo,
    description,
    setDescription 
}) => {

    const { id } = useParams()

    const [editForm, setEditForm] = useState(false)

    let filteredRecipient
    if(recipients) {
        filteredRecipient = recipients.filter((recipient) => {return recipient.id === id}) 
    }

    function handleDelete() {
        fetch(`/recipients/${id}`, {method: "DELETE"}) 
    }
   
  return (
    
     <div className="card">
          <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={recipient.logo} alt="recipient-logo"/>
          <span className="card-title">{recipient.name}</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
            <DonationForm user={user} recipient={recipient} />
            <p onClick={()=> setEditForm(!editForm)} className="btn">Edit Recipient</p>
            {editForm ? <UpdateRecipient 
            recipients={recipients}
            setRecipients={setRecipients}
            recipient={recipient}
            name={name}
            setName={setName}
            category={category}
            setCategory={setCategory}
            fundraisingGoal={fundraisingGoal}
            setFundraisingGoal={setFundraisingGoal}
            logo={logo}
            setLogo={setLogo}
            description={description}
            setDescription={setDescription}
             /> : null}
             <p className="btn" onClick={handleDelete}>Delete Recipient</p>
        </div>
      </div>
    </div>
  </div>

        </div>
    
  )
}

export default RecipientFullCard