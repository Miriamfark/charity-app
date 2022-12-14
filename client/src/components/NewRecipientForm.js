import React, { useState } from 'react'

const NewRecipientForm = ({ recipients, setRecipients }) => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("")
    const [fundraisingGoal, setFundraisingGoal] = useState("")
    const [logo, setLogo] = useState("")
    const [description, setDescription] = useState("")

    console.log("recipients:", recipients)

    function handleSubmit(e) {
        e.preventDefault()
        const newRecipientData = {
            name: name,
            category: category,
            fundraising_goal: fundraisingGoal,
            logo: logo,
            description: description
          }

          fetch("/recipients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipientData)
          })
            .then((r) => r.json())
            .then((newRecipient) => {
                console.log(recipients)
                setRecipients([...recipients, newRecipient])
                alert("New recipient submitted!")
            })
    }

  return (
    <div className="row container valign-wrapper">
        <form className="col s8" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s8">
                    <label>Recipient Name</label>
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                </div>
            </div>
            <div className="row">
                <label>Category</label>
                <div className="row">
                    <label>
                        <input type="radio" value="Poverty" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                        <span>Poverty</span>
                    </label>
                </div>
            </div>
            <div className="row">
                <label>
                    <input type="radio" value="Education" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                    <span>Education </span>
                </label>
            </div>
            <div className="row">
                <label>
                    <input type="radio" value="Health" name="category" onChange={(e)=> setCategory(e.target.value)} /> 
                    <span>Health</span>
                </label>
            </div>
            <div className="row">
                <div className="input-field col s8">
                    <label>Fundraising Goal</label>
                        <input 
                            type="number"
                            value={fundraisingGoal}
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
                            onChange={(e) => setDescription(e.target.value)}
                        ></input>
                </div>
            </div> 
            <div className="input-field col s8">
                    <input className="btn" type="submit" value="Submit" />
                </div>  
        </form>
    </div>
  )
}

export default NewRecipientForm