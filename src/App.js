import React from 'react';
import './App.css';

// Firebase imports
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyA_V8QG80U8Di91aMvWAJQKcovFXsmArBo",

  authDomain: "wildfire-51d44.firebaseapp.com",

  projectId: "wildfire-51d44",

  storageBucket: "wildfire-51d44.appspot.com",

  messagingSenderId: "917126229370",

  appId: "1:917126229370:web:8970da96dfb40c1ab13ac3",

  measurementId: "G-WTQN65JCFB"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);

// If user is defined show chat room, otherwise show sign in
function App() {
  return (
    <div className="App">
      <header>
        
      </header>

      <section >
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function ChatRoom() {


}

export default App;
