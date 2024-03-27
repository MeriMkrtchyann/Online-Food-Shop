import * as React from 'react';
import PassReset from '../../components/passReset/PassResetForm';
import passResetAuthen from "../../services/passResetAuthen.js"

export default function PassResetPage() {

  const [email, setEmail] = React.useState('');
  const [aboutUser , setAboutUser] = React.useState(null)
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
       passResetAuthen(aboutUser , password, newPassword)
    }catch(e){
      console.log(e.message);
    }
  };

  return (
    <PassReset setAboutUser={setAboutUser} setEmail={setEmail} email={email} setPassword={setPassword} setNewPassword={setNewPassword} handleSubmit={handleSubmit} />
  );
}