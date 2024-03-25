import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default async function writeUserData(aboutUser) {
    const db = getDatabase();
    const userId = uuidv4()
    try{
        await set(ref(db, 'users/' + userId), {
            firstName : aboutUser.aboutUserFirstName.value,
            lastName : aboutUser.aboutUserLastName.value,
            username : aboutUser.aboutUserName.value,
            email : aboutUser.aboutUserEmail.value,
            conatct : aboutUser.aboutUserPhome.value,
            addres : aboutUser.aboutUserAddres.value,
        });
    }catch(e){
        throw new Error("")
    }
}
