import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDonation } from '../redux/usersSlice';

const DonationForm = ({ recipient }) => {

    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()

    function submitDonation(e) {
        e.preventDefault()
        const donationData = {
            recipient_id: recipient.id,
            amount: amount
          }
          dispatch(postDonation(donationData))
    }

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