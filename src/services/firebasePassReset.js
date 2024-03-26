import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default async function passReset(aboutUser) {
    
    const auth = getAuth();
    const emailAddress = 'user@example.com';

    sendPasswordResetEmail(auth, emailAddress)
    .then(() => {
        console.log('Password reset email sent!');
    })
    .catch((error) => {
        console.error('Error sending password reset email:', error);
    });
}


