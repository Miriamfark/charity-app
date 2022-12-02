import React from 'react'

const RecipientCard = ({ recipient }) => {
    console.log(recipient)
  return (
  <div className="row">
  <div className="col s12 m6">
    <div className="card">
      <div className="card-image">
        <img src={recipient.logo} />
        <span className="card-title">{recipient.name}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">Donate!</i></a>
      </div>
      <div className="card-content">
        <p>{recipient.description}</p>
      </div>
    </div>
  </div>
</div>
  )
}
  

export default RecipientCard