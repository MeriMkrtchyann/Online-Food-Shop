import * as React from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Login from '../../components/login/Login';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase/firebase"

export default function LoginPage() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [color , setColor] = React.useState('white');
  const [errorText , setErrorText] = React.useState("errorText")
  const navigate  = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        navigate("/")    
      } else {
        setErrorText("You cannot log in because you have not passed verification.")
        setColor("red")
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setErrorText("Please enter valid login and password.")
      setColor("red")
    });
};
  

  return (
   <Login handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} color={color} errorText={errorText} />
  );
}