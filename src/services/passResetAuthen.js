import { getAuth, updatePassword } from "firebase/auth";
import firebaseUpdate from "./firebaseUpdate";

export default async function passResetAuthen(aboutUser, password, newPassword, setErrorText, setColor) {
  const sha256 = require('js-sha256');
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    console.log(user)
    try {
      if (password && newPassword){
        console.log(password)
        console.log(newPassword)
        const userId = Object.keys(aboutUser);
        const oldPass = aboutUser[userId[0]].password;
        console.log(oldPass)
        console.log( sha256(password))
        const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[\w@$!%*?&.\\]{8,}$/;
        let isPasswordInvalid =  newPassword.match(passwordValidationRegex)
        console.log(isPasswordInvalid)
        if (oldPass === sha256(password) && isPasswordInvalid ) {
          await updatePassword(user, newPassword);
          await firebaseUpdate(userId[0], {
            password: sha256(newPassword)
          });
          setColor("green");
          setErrorText('Password updated successfully in Firebase Auth!')
          console.log('Password updated successfully in Firebase Auth!');
        }else {
          setColor("red")
          setErrorText("Pleaz enter correct data")
        }
      }else{
        setColor("red")
        setErrorText("Pleaz enter correct data")
      }
     
    } catch (error) {
      setColor("red")
      setErrorText("Error updating password")
      console.error('Error updating password in Firebase Auth:', error);
    }
  } else {
    setColor("red")
    setErrorText('No user is signed in.')
  }
}
