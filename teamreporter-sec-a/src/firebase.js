import Firebase from 'firebase/compat/app'
import  'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAAG2UVkHLS_7tRo1DjUG9cH_7wsHR2rJo",
    authDomain: "teamreporter-intern.firebaseapp.com",
    projectId: "teamreporter-intern",
    storageBucket: "teamreporter-intern.appspot.com",
    messagingSenderId: "1043347537898",
    appId: "1:1043347537898:web:c11d905cff4d23e460fc93"
};

export const fire = Firebase.initializeApp(firebaseConfig)
console.log(fire)
export const auth = Firebase.auth()
console.log(auth)