import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/usersSlice';

const MyDonationList = ({ user }) => {

    const dispatch = useDispatch()
    const donations = useSelector((state) => state.users.user.donations)

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch, donations.length])

    const mappedDonations = donations && donations.map((donation) => {
        // console.log(donation)
        return <li key={donation.id}>{donation.recipient && donation.recipient.name} | Amount: ${donation.amount} | Date: {donation.created_at.slice(0, 10)}</li>
    })
    
    return (
    <div>
        <h3>{user.username}'s Donations</h3>
        <ul>
            {mappedDonations}
        </ul>
    </div>
  )
}

export default MyDonationList