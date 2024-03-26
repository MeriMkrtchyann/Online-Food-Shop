import readUserData from "./firebaseGet";

export default async function passReset(email) {
    
  try{
    const user = await readUserData(email)
    
    if (user){
      return user
    }
    
  }catch(e){
    console.log(e.message);
  }
  

}


