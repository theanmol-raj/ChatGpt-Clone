
import { collection, addDoc, serverTimestamp} from "firebase/firestore"; 
import { db } from '../firebase';
import resond from "../openai/openaiclient";



async function ChatHandler(userId ,room ,message) {


     await addDoc(collection(db,'users', userId  , 'chatroom' , room ,'messages'), {
        timestamp: serverTimestamp(),
        role : 'user',
        message 
    }).then(res => res.id)


    const GPTresponse = await resond(message) ;


    await addDoc(collection(db,'users', userId  , 'chatroom' ,room ,'messages'), {
        timestamp: serverTimestamp(),
        role : 'assistant',
        message : GPTresponse
    }).then(res => res.id)





    // return docRef

    // Navigation 


  
}

export default ChatHandler