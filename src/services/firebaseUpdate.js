import { getDatabase, ref, update } from "firebase/database";

export default async function updateUserData(activUser) {
    
    const db = getDatabase();
    const userRef = ref(db, `users/${activUser}`); 

    const updates = {
    email: 'newemail@example.com',
    fullName: 'New Full Name'
    };

    update(userRef, updates)
    .then(() => console.log('Data updated successfully!'))
    .catch((error) => console.error('Failed to update data:', error));
}

