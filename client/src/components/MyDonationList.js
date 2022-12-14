import React from 'react'

const MyDonationList = ({ user }) => {

    const mappedDonations = user.donations.map((donation) => {
        return <li>{donation.recipient.name} | Amount: ${donation.amount} | Date: {donation.created_at.slice(0, 10)}</li>
    })
    return (
    <div>
        <h2>{user.username}'s Donations</h2>
        <ul>
            {mappedDonations}
        </ul>
    </div>
  )
}

export default MyDonationList