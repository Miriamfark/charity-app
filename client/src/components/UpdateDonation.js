import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const UpdateDonation = ({ user }) => {
  
    let { id } = useParams()
    const donation = user.donations.map((donation) => {
        if(donation.id == id) {
            return donation
        }
    })[0]
    
    const [amountNumber, setAmountNumber] = useState(donation?.amount)  

    function updateDonation(e) {
        e.preventDefault()
        const donationData = {
            amount: amountNumber,
          }
        fetch(`/donations/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(donationData)
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
                        value={amountNumber}
                        onChange={(e) => setAmountNumber(e.target.value)}
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