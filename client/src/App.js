import React, { useState, useEffect } from 'react'
import SignupForm from './SignupForm';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <SignupForm setUser={setUser} />;

  return (
    <div>
      Charity App
      {/* <SignupForm onUser={setUser} /> */}
    </div>
  );
}

export default App;
