import * as React from 'react';

import Login from '../../components/login/Login';


export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
   <Login handleSubmit={handleSubmit}/>
  );
}
