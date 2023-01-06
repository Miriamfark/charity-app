import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDonation, fetchUser } from '../redux/usersSlice';

const DonationForm = ({ recipient }) => {

    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const recipientsFromUser = useSelector((state) => state.users.user.recipients)
    console.log(recipientsFromUser)
    // show update to state when donating to a new recipient!!!
    function submitDonation(e) {
        e.preventDefault()
        const donationData = {
            recipient_id: recipient.id,
            amount: amount
          }
          dispatch(postDonation(donationData))
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

  return (
    <div>
        <form className="col s8" onSubmit={submitDonation}>
            <div className="row">
                <div className="input-field col s8">
                    <label>Amount $</label>
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="input-field col s8">
                <input className="btn" type="submit" value="Donate" />
            </div>
        </form>
    </div>
  )
}

export default DonationForm