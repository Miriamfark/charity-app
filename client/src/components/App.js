import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import SignupForm from './SignupForm';
import Login from './Login';
import NavBar from './NavBar';
import RecipientDonationCard from './RecipientDonationCard'
import RecipientList from './RecipientList';
import RecipientFullCard from './RecipientFullCard';
import NewRecipientForm from './NewRecipientForm';
import UpdateDonation from './UpdateDonation';

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

  return (
    <div>
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/me" />
        <Route path="/me/recipients/:id/donations" element={<RecipientDonationCard user={user} />} />
        {/* <Route path="/me/donations" element={<DonationList />}/> */}
        <Route path="/me/donations/:id" element={<UpdateDonation user={user} />} />
        <Route path="/recipients" element={<RecipientList recipients={recipients} />} />
        <Route path="/recipients/:id" element={<RecipientFullCard recipients={recipients} />} />
        <Route path="/recipients/new" element={<NewRecipientForm />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
     </Routes>
     <h1>My Organizations</h1>
      <ul>
        {user.recipients.map((recipient)=>{
          return <Link to={`/me/recipients/${recipient.id}/donations`} className="btn" key={recipient.id}>{recipient.name}</Link>
        })}
      </ul>
    </div>
  );
}

export default App;
