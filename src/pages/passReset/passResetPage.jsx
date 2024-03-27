import * as React from 'react';
import PassReset from '../../components/passReset/PassResetForm';
import passResetAuthen from "../../services/passResetAuthen.js"

export default function PassResetPage() {

  const [email, setEmail] = React.useState('');
  const [aboutUser , setAboutUser] = React.useState(null)
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [color , setColor] = React.useState("white")
  const [errorText , setErrorText] = React.useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      setColor("white")
      setErrorText("")
      await passResetAuthen(aboutUser , password, newPassword, setErrorText, setColor)
    }catch(e){
      console.log(errorText);
    }
  };

  return (
    <PassReset setAboutUser={setAboutUser} setEmail={setEmail} email={email} setPassword={setPassword} setNewPassword={setNewPassword} handleSubmit={handleSubmit} color={color} errorText={errorText}/>
  );
}