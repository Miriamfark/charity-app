import React from 'react'

const UpdateRecipient = ({ 
    recipients,
    setRecipients,
    recipient,
    name,
    setName,
    category,
    setCategory,
    fundraisingGoal,
    setFundraisingGoal,
    logo,
    setLogo,
    description,
    setDescription 
}) => {

    // console.log(id)

    function handleSubmit(e) {
        e.preventDefault()
        const editRecipientData = {
            name: name,
            category: category,
            fundraising_goal: fundraisingGoal,
            logo: logo,
            description: description
          }

          fetch(`/recipients/${recipient.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editRecipientData)
          })
            .then((r) => r.json())
            .then((updatedRecipient) => {
                setRecipients([...recipients, updatedRecipient])
                alert("Recipient updated!")
            })
    }

  return (
    <div>
        <div className="row container valign-wrapper">
        <form className="col s8" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8">
                    <label>Recipient Name</label>
                        <input 
                            type="text"
                            value={name}
                            defaultValue={recipient.name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                </div>
            </div>
            <div className="row">
                <label>Category</label>
                <div className="row">
                    <label>
                        <input type="radio" value="poverty" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                        <span>Poverty</span>
                    </label>
                </div>
            </div>
            <div className="row">
                <label>
                    <input type="radio" value="education" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                    <span>Education </span>
                </label>
            </div>
            <div className="row">
                <label>
                    <input type="radio" value="health" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                    <span>Health</span>
                </label>
            </div>
            <div className="row">
                <div className="input-field col s8">
                    <label>Fundraising Goal</label>
                        <input 
                            type="number"
                            value={fundraisingGoal}
                            defaultValue={recipient.fundraisingGoal}
                            onChange={(e) => setFundraisingGoal(e.target.value)}
                        ></input>
                </div>
            </div> 
            <div className="row">
                <div className="input-field col s8">
                    <label>Logo</label>
                        <input 
                            type="text"
                            value={logo}
                            defaultValue={recipient.logo}
                            onChange={(e) => setLogo(e.target.value)}
                        ></input>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s8">
                    <label>Description</label>
                        <input 
                            type="textarea"
                            value={description}
                            defaultValue={recipient.description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></input>
                </div>
            </div> 
            <div className="input-field col s8">
                    <input className="btn" type="submit" value="Edit" />
                </div>  
        </form>
    </div>
    </div>
  )
}

export default UpdateRecipient