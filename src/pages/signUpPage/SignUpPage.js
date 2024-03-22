import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import { Registraion } from '../../components/registration/Registration';



const defaultTheme = createTheme();

export function SignUpPage() {

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

  const [error, setError] = React.useState("")

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
      console.error('Ошибка');
      // setError(error.message);
    }
  };
 
  return (
    <Registraion aboutUser={aboutUser} setAboutUser={setAboutUser} handleRegistration={handleRegistration}/>
  );
}