import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbconfig = {
    apiKey: "AIzaSyDjLgIU-MhUBh_5qdxCMEXGbMG0LrXH3qM",
    authDomain: "clothing-center-db.firebaseapp.com",
    databaseURL: "https://clothing-center-db.firebaseio.com",
    projectId: "clothing-center-db",
    storageBucket: "clothing-center-db.appspot.com",
    messagingSenderId: "581734191640",
    appId: "1:581734191640:web:6506d54895f130976ea96d",
    measurementId: "G-LRE9XCG0EK"
};



firebase.initializeApp(fbconfig);
//for google authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//for google authentication utils
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




// firestore.collection('users').doc('O5Dlg2cYbyM2ms2oWyyD').collection('cartitems').doc('Nfc26xrWPMm56JJET9tL');
// firestore.doc('/users/O5Dlg2cYbyM2ms2oWyyD/cartitmes/Nfc26xrWPMm56JJET9tL');
// firestore.collection('/users/O5Dlg2cYbyM2ms2oWyyD/cartitmes');

//Storage

export const createUserDatabase = async (userAuth, additionalData) => {
    if (!userAuth) return console.log("SIGNED OUT");
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error cretaing user', error.message)
        }        
    }
    return userRef;
}




// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return console.log("SIGNED OUT");
//     const userRef = firestore.doc(`users/${userAuth.uid}`);
//     const snapshot = await userRef.get();
//     console.log(snapshot);
//     if (!snapshot.exists) {
//         const { displayName, email } = userAuth;
//         const createdDate = new Date();
//         try {
//             await userRef.set({
//                 displayName, email, createdDate, ...additionalData
//             })
//         } catch (error) {
//             console.log('error cretaing user', error.message)
//         }
//     }
//     return userRef;
// }


export default firebase;