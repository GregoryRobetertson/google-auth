'use client';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebaseConfig';
import React from 'react'

export default function GoogleSignIn() {
   const handGoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User signed in:', user.displayName);
    } catch (error) {
        console.error('Error signing in:', error);
    }
   } 
  return (
    <>
    <button onClick={handGoogleSignIn}> Sign in with Google </button>
    <p>Click the button above to sign in!</p>
    </>
    
  )
}
