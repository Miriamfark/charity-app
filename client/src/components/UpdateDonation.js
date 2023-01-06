import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateDonation } from '../redux/usersSlice';


const UpdateDonation = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const donations = useSelector((state) => state.users.user.donations)
  
    let { id } = useParams()
    console.log(donations)
    const donation = donations.filter((donation) => donation.id == id)[0]
      

    console.log(donation)
    
    const [amountNumber, setAmountNumber] = useState(donation && donation.amount)  

    function handleUpdateDonation(e) {
        e.preventDefault()
        const donationData = {
            id: id,
            amount: amountNumber,
           }
           console.log(donationData, id)
        dispatch(updateDonation(donationData))
        navigate(`/me/recipients/${donation.recipient_id}/donations`)
    }

    function handleAmountChange(e) {
        console.log(e.target.value)
        setAmountNumber(e.target.value)
    }

    return (
    <div>
        <form className="col s8" onSubmit={(e) => handleUpdateDonation(e)}> 
            <div className="row">
                <div className="input-field col s8">
                    <label>Amount $</label>
                    <input 
                        type="number"
                        value={amountNumber}
                        onChange={handleAmountChange}
                    ></input>
                </div>
            </div>
            <div className="input-field col s8">
                <input className="btn" type="submit" value="Save Changes" />
            </div>
        </form>
    </div>
  )
}

export default UpdateDonation