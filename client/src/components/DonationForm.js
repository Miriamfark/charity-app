import React, { useState } from 'react'

const DonationForm = ({ user, recipient }) => {

    const [amount, setAmount] = useState(1)

    function submitDonation(e) {
        e.preventDefault()
        const donationData = {
            user_id: user.id,
            recipient_id: recipient.id,
            amount: amount
          }

          fetch("/donations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donationData)
          })
            .then((r) => r.json())
            .then((donation) => {
                console.log(donation)
            })
    }

  return (
    <div>
        <form className="col s8" onSubmit={submitDonation}>
            <div className="row">
                <div className="input-field col s8">
                    <label>Amount </label>
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