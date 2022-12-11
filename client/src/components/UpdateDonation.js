import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const UpdateDonation = ({ user }) => {
    
    let { id } = useParams()
    const donation = user.donations.filter((donation) => donation.id == id)[0]

    const [amount, setAmount] = useState(donation.amount)
    console.log(amount)
    
    function updateDonation(e) {
        e.preventDefault()
        const donationData = {
            amount: amount
          }
        fetch(`/donations/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
          })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
            })
    }

    return (
    <div>
        <form className="col s8" onSubmit={updateDonation}>
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
                <input className="btn" type="submit" value="Save Changes" />
            </div>
        </form>
    </div>
  )
}

export default UpdateDonation