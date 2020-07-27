import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA0V2vEMgN7XHRuogaKvP-ahmjNGRmvFVA",
    authDomain: "e-commerce-5f16c.firebaseapp.com",
    databaseURL: "https://e-commerce-5f16c.firebaseio.com",
    projectId: "e-commerce-5f16c",
    storageBucket: "e-commerce-5f16c.appspot.com",
    messagingSenderId: "819019409937",
    appId: "1:819019409937:web:44b5fa8165d7f4a6af9fb0",
    measurementId: "G-F596K7DR9G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;
}


export default firebase;