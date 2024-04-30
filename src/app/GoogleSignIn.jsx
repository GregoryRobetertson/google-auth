"use client";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import React, { useState } from "react";

export default function GoogleSignIn() {
  const [userObj, setUserObj] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserObj(user);
      console.log("User signed in:", user.displayName);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserObj(null);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      {!userObj && (
        <button
          onClick={handleGoogleSignIn}
          style={{
            backgroundColor: "#4285f4",
            color: "white",
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            border: "none",
            borderRadius: "4px",
            padding: "10px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)", // Adding box shadow
          }}
        >
          Sign in with Google{" "}
        </button>
      )}
      {userObj && (
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#4285f4",
            color: "white",
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            border: "none",
            borderRadius: "4px",
            padding: "10px 24px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)", // Adding box shadow
          }}
        >
          Log out{" "}
        </button>
      )}
      {userObj && <p>Welcome back {userObj.displayName}</p>}
      {!userObj && <p>Click the button above to sign in!</p>}
    </>
  );
}
