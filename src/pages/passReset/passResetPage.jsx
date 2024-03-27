import * as React from 'react';
import PassReset from '../../components/passReset/PassResetForm';
import passResetAuthen from "../../services/passResetAuthen.js"
import firebaseGet from "../../services/firebaseGet.js"

export default function PassResetPage() {

  const [email, setEmail] = React.useState('');
  const [aboutUser , setAboutUser] = React.useState("")
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [color , setColor] = React.useState("white")
  const [errorText , setErrorText] = React.useState("")
  const [modal , setModal] =  React.useState(false)

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

  const openModal = async () => {
    const user = await firebaseGet(email)
    setAboutUser(user)
    if (user){
      console.log(aboutUser)
      setModal(true)
    }else{
      setErrorText("Plize enter valid email")
      setColor("red")
      setAboutUser(null)
    }
  }

  return (
    <PassReset 
      setEmail={setEmail} 
      setPassword={setPassword} 
      setNewPassword={setNewPassword}
      handleSubmit={handleSubmit} 
      color={color} 
      errorText={errorText}
      openModal={openModal}
      modal={modal}
      setModal={setModal}
      />
  );
}