import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import DonationForm from './DonationForm'
import UpdateDonation from './UpdateDonation'

const RecipientDonationCard = ({ user }) => {

    let { id } = useParams()

    const [donations, setDonations] = useState([])

    const recipient = user.recipients.filter((recipient) => recipient.id == id)[0]

    useEffect(() => {
        fetch(`/me/recipients/${id}/donations`).then((r) => {
          if (r.ok) {
            r.json().then((data) => setDonations(data));
          }
        });
      }, []);

    
    
  return (
    <div>
        <img src={recipient.logo} />
        <h1>{recipient.name}</h1>
        <p>{recipient.description}</p>
        <span>{recipient.category}</span>
        <h3>Make Another Donation</h3>
        <DonationForm recipient={recipient} />
        <ul>
            <h4>My Previous Donations</h4>
            {donations.map((donation) => {
                return (
                    <>
                        <li key={donation.id}>Donation: ${donation.amount} | Date: {donation.created_at.slice(0, 10)}</li>
                        <Link className="btn" element={<UpdateDonation />} to={`/me/donations/${donation.id}`}>Edit Donation</Link>
                    </>)
            })}
        </ul>
    </div>
  )
}

export default RecipientDonationCard