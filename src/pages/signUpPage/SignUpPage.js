import * as React from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import { Registraion } from '../../components/registration/Registration';
import SpringModal from '../../components/modals/Modal';

export function SignUpPage() {

  const [openModal , setOpenModal] = React.useState(false)
  const [modalText , setModalText] = React.useState("")
  const [modalTextColor , setModalTextColor] = React.useState("red")

  const [aboutUser , setAboutUser] = React.useState({
    aboutUserFirstName : {value : "", valid : false},
    aboutUserLastName : {value : "", valid : false},
    aboutUserName :{value : "", valid : false},
    aboutUserEmail : {value : "", valid : false},
    aboutUserPhome : {value : "", valid : false},
    aboutUserAddres : {value : "", valid : true},
    aboutUserPassword : {value : "", valid : false},
    aboutUserCanfirmPassword : {value : "", valid : false}
  })

  const isValidUser = () => {
    return Object.values(aboutUser).every(({ valid }) => valid);
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    const isValid = isValidUser()
    if (isValid){
      try {
        const email = aboutUser.aboutUserEmail.value
        const password = aboutUser.aboutUserPassword.value
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user) {
          await sendEmailVerification(userCredential.user) 
          setModalText("A verification email has been sent to your address. Please check your inbox.")
          setModalTextColor("green")
          console.log("Email verification sent");
        } else {
          setModalText("User creation failed. Please try again.")
        }
        setOpenModal(true)
        setTimeout(() => {setOpenModal(false)},3000)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setModalText("An account with this email already exists. Please use a different email or log in.")
            break;
          case 'auth/invalid-email':
            setModalText("The email address is not valid. Please enter a valid email address.")
            break;
          case 'auth/weak-password':
            setModalText("The password is too weak. Please enter a stronger password.")
            break;
          default:
            setModalText("An error occurred during registration. Please try again later.")
            break;
        }
        console.error('Registration error:', error.message);
        setTimeout(() => {setOpenModal(false)},3000)
        setOpenModal(true);
      }
  }else{
      setOpenModal(true)
      setTimeout(() => {setOpenModal(false)},3000)
      setModalText("Please fill in all the required fields.")
      console.error('Please fill in all the required fields.');
    }
  };
 
  return ( 
    <div onClick={()=>setOpenModal(false)}>
      <Registraion aboutUser={aboutUser} setAboutUser={setAboutUser} handleRegistration={handleRegistration} />
      <SpringModal openModal={openModal} modalText={modalText} modalTextColor={modalTextColor}/>
    </div>
  );
}