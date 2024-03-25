import { getDatabase, ref, get } from "firebase/database";

export default async function readUserData(email) {
    const db = getDatabase();
    const usersRef = ref(db, 'users');
    try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
            const data = snapshot.val()
            console.log("data" , data)
            for(let userId in data){
                if(data[userId].email === email){
                    // return {[userId] : data[userId]}
                    return userId
                }
            }
        } else {
            console.log("No data available");
            return {};
        }
    } catch (error) {
        throw new Error("Error reading data");
    }
}


