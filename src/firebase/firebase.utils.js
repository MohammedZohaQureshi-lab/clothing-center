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

//Storage
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    else{
        
    }
}












firestore.collection('users').doc('O5Dlg2cYbyM2ms2oWyyD').collection('cartitems').doc('Nfc26xrWPMm56JJET9tL');
firestore.doc('/users/O5Dlg2cYbyM2ms2oWyyD/cartitmes/Nfc26xrWPMm56JJET9tL');
firestore.collection('/users/O5Dlg2cYbyM2ms2oWyyD/cartitmes');
export default firebase;