import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

 initializeAuthentication();
 
 const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInUsingGoogle = () => {
         signInWithPopup(auth, googleProvider)
         .then(result => {
            setUser(result.user);
         })
         .catch(error => {
              setError(error.message);
         })
     }
     const logOut =  () => {
         signOut(auth)
          .then(() => {
              setUser({})
         })
     }

     useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
               setUser(user);
               
            }  
          });
     } , [])
     return  {
         user,
         error,
         signInUsingGoogle,
         logOut
     }
 };
 
 export default useFirebase;