import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAVJRiJ4c4GEKym1_jVEm7sA3K0xkeh9pg",
  authDomain: "react-study-65980.firebaseapp.com",
  databaseURL: "https://react-study-65980.firebaseio.com",
  projectId: "react-study-65980",
  storageBucket: "react-study-65980.appspot.com",
  messagingSenderId: "337557890390"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth