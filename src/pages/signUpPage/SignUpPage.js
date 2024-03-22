import * as React from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import { Registraion } from '../../components/registration/Registration';
import SpringModal from '../../components/modals/Modal';

export function SignUpPage() {

  const [error, setError] = React.useState("")
  const [openModal , setOpenModal] = React.useState(false)

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
        console.log(email, password)
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user) {
          await sendEmailVerification(userCredential.user) 
          console.log("Email verification sent");
        } else {
          setError("Failed to create user");
        }
      } catch (error) {
        console.error('Ошибка при регистрации:', error.message);
        setError(error.message);
      }
    }else{
      setOpenModal(true)
      setTimeout(() => {
        setOpenModal(false)
      },3000)
      console.error('Ошибка');
      // setError(error.message);
    }
  };
 
  return ( 
    <div onClick={()=>setOpenModal(false)}>
      <Registraion aboutUser={aboutUser} setAboutUser={setAboutUser} handleRegistration={handleRegistration} />
      <SpringModal openModal={openModal}/>
    </div>
  );
}