import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Login from './Login';
import NavBar from './NavBar';
import RecipientDonationCard from './RecipientDonationCard'
import RecipientList from './RecipientList';
import RecipientFullCard from './RecipientFullCard';
import NewRecipientForm from './NewRecipientForm';
import UpdateDonation from './UpdateDonation';
import MyDonationList from './MyDonationList';

function App() {

  const [user, setUser] = useState(null)
  const [recipients, setRecipients] = useState([]); 

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  useEffect(() => {
    fetch("/recipients")
      .then((r) => r.json())
      .then(setRecipients);
  }, []);

  console.log(recipients)

  if (!user) return <Login setUser={setUser} />;

 const myRecipientsArray = user.recipients
 //gets only one of each recipient
 let uniqueRecipientsArray = [
  ...new Map(myRecipientsArray.map((recipient)=>[recipient["name"], recipient])).values(),
]

  return (
    <div>
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/me" />
        <Route path="/me/recipients/:id/donations" element={<RecipientDonationCard user={user} />} />
        <Route path="/me/donations/:id" element={<UpdateDonation user={user} />} />
        <Route path="/recipients" element={<RecipientList recipients={recipients} setRecipients={setRecipients} />} />
        <Route path="/recipients/:id" element={<RecipientFullCard recipients={recipients} />} />
        <Route path="/me/donations" element={<MyDonationList user={user} />} />
        <Route path="/recipients/new" element={<NewRecipientForm recipients={recipients} setRecipients={setRecipients} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
     </Routes>
     <h1>{user.username}'s Organizations</h1>
     { uniqueRecipientsArray.length > 0 ? (
      <ul>
      {uniqueRecipientsArray.map((recipient)=>{
        return <Link to={`/me/recipients/${recipient.id}/donations`} className="btn" key={recipient.id}>{recipient.name}</Link>
      })}
    </ul>
     ) : (
      <>
        <h3>Currently you do not have any recipients. Make a donation today!</h3>
        <Link className="btn" to={'/recipients'} element={<RecipientList />}>Recipients</Link>
      </>
     )
     }   
    </div>
  );
}

export default App;
