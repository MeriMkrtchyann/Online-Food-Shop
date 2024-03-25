import * as React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from '../../components/login/Login';
import { auth } from "../../firebase/firebase"

export default function LoginPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        console.log('Пользователь может войти в систему.');    
      } else {
        console.log('Пользователь не может войти в систему, так как не прошел верификацию.');
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
  

  return (
   <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>
  );
}

