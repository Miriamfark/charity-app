import React, { useState, useEffect } from 'react'
import SignupForm from './SignupForm';
import Login from './Login';
import NavBar from './NavBar';
import RecipientList from './RecipientList';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div>
      {/* <NavBar /> */}
      Charity App
      <RecipientList />
    </div>
  );
}

export default App;
