import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/usersSlice';
import { fetchRecipients } from '../redux/recipientsSlice';
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

  const user = useSelector((state) => state.users.user)
  const recipients = useSelector((state) => state.recipients.recipients)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);

  console.log(user)

  useEffect(() => {
    dispatch(fetchRecipients)
  }, [dispatch, recipients.length]);

  console.log(recipients)

  if (!user) return <Login />;

 const myRecipientsArray = user.recipients
 //gets only one of each recipient
 let uniqueRecipientsArray = [
  ...new Map(myRecipientsArray.map((recipient)=>[recipient["name"], recipient])).values(),
]

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/me" />
        <Route path="/me/recipients/:id/donations" element={<RecipientDonationCard user={user} />} />
        <Route path="/me/donations/:id" element={<UpdateDonation user={user} />} />
        <Route path="/recipients" element={<RecipientList recipients={recipients} />} />
        <Route path="/recipients/:id" element={<RecipientFullCard recipients={recipients} />} />
        <Route path="/me/donations" element={<MyDonationList user={user} />} />
        <Route path="/recipients/new" element={<NewRecipientForm />} />
        <Route path="/login" element={<Login />} />
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
