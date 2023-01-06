import React from 'react'
import { useParams, Link } from 'react-router-dom'
import DonationForm from './DonationForm'
import UpdateDonation from './UpdateDonation'
import { useDispatch } from "react-redux"
import { removeDonation } from '../redux/usersSlice'

const RecipientDonationCard = ({ user }) => {

  const dispatch = useDispatch()

    let { id } = useParams()
    //after delete a donation or when refresh the page, the .filter is breaking
    const donations = user.donations.filter((donation) => donation.recipient_id == id)
    const recipient = user.recipients.filter((recipient)=>recipient.id == id)[0]

    function handleDonationDelete(id, recipientId) {
      const data = {
        donationId: id,
        recipientId: recipientId
      }
          dispatch(removeDonation(data))
    }

    const mappedDonations = donations.map((donation) => {
      return (
          <div key={donation.id}>
              <li key={donation.id}>Donation: ${donation.amount} | Date: {donation.created_at.slice(0, 10)}</li>
              <Link className="btn" element={<UpdateDonation />} to={`/me/donations/${donation.id}`}>Edit Donation</Link>
              <button onClick={() => handleDonationDelete(donation.id, donation.recipient_id)}>Delete Donation</button>
          </div>
          )
  })

  return (
    <div>
      { recipient ? (
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