import React from 'react'
import { useParams, Link } from 'react-router-dom'
import DonationForm from './DonationForm'
import UpdateDonation from './UpdateDonation'

const RecipientDonationCard = ({ user }) => {

    let { id } = useParams()

    const donations = user.donations.filter((donation) => donation.recipient.id == id)
    const recipient = user.recipients.filter((recipient)=>recipient.id == id)[0]

    console.log("recipient:",recipient)

    const mappedDonations = donations.map((donation) => {
      return (
          <>
              <li key={donation.id}>Donation: ${donation.amount} | Date: {donation.created_at.slice(0, 10)}</li>
              <Link className="btn" element={<UpdateDonation user={user} />} to={`/me/donations/${donation.id}`}>Edit Donation</Link>
              <p className="btn" onClick={()=>{
                fetch(`/donations/${donation.id}`, { method: "DELETE" })
                .then(alert("Donation deleted!"))
              }}>Delete Donation</p>
          </>
          )
  })

  return (
    <div>
      { user.recipients.length >= 1 ? (
        <>
          <img src={recipient.logo} alt="logo" />
          <h1>{recipient.name}</h1>
          <p>{recipient.description}</p>
          <span>{recipient.category}</span>
          <h5>${recipient.sum_donations} out of ${recipient.fundraising_goal} collected.</h5>
          <h3>Make Another Donation</h3>
          <DonationForm recipient={recipient} />
          <ul>
              <h4>My Previous Donations</h4>
              {mappedDonations}
          </ul>
        </>
      ) : (
        <h2>You have deleted your donation.</h2>
      )}
       
    </div>
  )
}

export default RecipientDonationCard