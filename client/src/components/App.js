import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import SignupForm from './SignupForm';
import Login from './Login';
import NavBar from './NavBar';
import RecipientList from './RecipientList';
import RecipientFullCard from './RecipientFullCard';
import NewRecipientForm from './NewRecipientForm';

function App() {

  const [user, setUser] = useState(null)
  const [recipients, setRecipients] = useState([]);
  const [recipient, setRecipient] = useState("")

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/recipients")
      .then((r) => r.json())
      .then(setRecipients);
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/recipients" element={<RecipientList recipients={recipients} recipient={recipient} setRecipient={setRecipient} />} />
        <Route path="/recipients/:id" element={<RecipientFullCard recipients={recipients} recipient={recipient} setRecipient={setRecipient} />} />
        <Route path="/recipients/new" element={<NewRecipientForm setRecipients={setRecipients} recipients={recipients} />} />
     </Routes>
      Charity App
    </div>
  );
}

export default App;
