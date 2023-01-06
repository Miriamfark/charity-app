import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, clearState } from '../redux/usersSlice';
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
import PrivateRoutes from './PrivateRoutes';

function App() {

  const user = useSelector((state) => state.users.user)
  const recipients = useSelector((state) => state.recipients.recipients)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    console.log("in the fetch user")
  }, [dispatch]);

  console.log(user)

  useEffect(() => {
    dispatch(fetchRecipients())
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearState());
  }, [dispatch, user?.id]);

  console.log(recipients)

  if (!user) return <Login />;

 const myRecipientsArray = user && user.recipients
//  gets only one of each recipient
 let uniqueRecipientsArray = [
  ...new Map(myRecipientsArray && myRecipientsArray.map((recipient)=>[recipient["name"], recipient])).values(),
]

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/me" />
        <Route path="/me/recipients/:id/donations" element={<PrivateRoutes> <RecipientDonationCard user={user} /> </PrivateRoutes> } />
        <Route path="/me/donations/:id" element={<PrivateRoutes> <UpdateDonation user={user} /> </PrivateRoutes>} />
        <Route path="/recipients" element={<PrivateRoutes><RecipientList recipients={recipients} /></PrivateRoutes>} />
        <Route path="/recipients/:id" element={<PrivateRoutes><RecipientFullCard recipients={recipients} /></PrivateRoutes>} />
        <Route path="/me/donations" element={<PrivateRoutes><MyDonationList user={user} /></PrivateRoutes>} />
        <Route path="/recipients/new" element={<PrivateRoutes><NewRecipientForm /></PrivateRoutes>} />
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
