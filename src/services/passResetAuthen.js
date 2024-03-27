import { getAuth, updatePassword } from "firebase/auth";
import firebaseUpdate from "./firebaseUpdate";

export default async function passResetAuthen(aboutUser, password, newPassword) {
  const sha256 = require('js-sha256');
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      if (password && newPassword){
        await updatePassword(user, newPassword);
        const userId = Object.keys(aboutUser);
        const oldPass = aboutUser[userId[0]].password;
        if (oldPass === sha256(password)) {
          await firebaseUpdate(userId[0], {
            password: sha256(newPassword)
          });
        }
        console.log('Password updated successfully in Firebase Auth!');
      }
     
    } catch (error) {
      console.error('Error updating password in Firebase Auth:', error);
    }
  } else {
    console.log('No user is signed in.');
  }
}
