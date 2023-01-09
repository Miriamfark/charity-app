import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipients } from '../redux/recipientsSlice';
import { postDonation, fetchUser, userSelector, clearState, updateSumDonations } from '../redux/usersSlice';

const DonationForm = ({ recipient }) => {

    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const { isError, errorMessage } = useSelector(userSelector)
    const [errors, setErrors] = useState(false)

    useEffect(() => {
        if (isError) {
            setErrors(errorMessage)
            dispatch(clearState())
        }
    }, [isError, dispatch, errorMessage])
  
    function submitDonation(e) {
        e.preventDefault()
        const donationData = {
            recipient_id: recipient.id,
            amount: amount
          }
          dispatch(postDonation(donationData))
          dispatch(updateSumDonations(donationData.recipient_id))
          dispatch(fetchRecipients())  
    }

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    function handleAmountChange(e) {
        setAmount(e.target.value)
        setErrors(false)
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
                        onChange={handleAmountChange}
                    ></input>
                </div>
            </div>
            <div className="input-field col s8">
                <input className="btn" type="submit" value="Donate" />
            </div>
        </form>
        { errors ? <h5>{errors}</h5> : null }
    </div>
  )
}

export default DonationForm