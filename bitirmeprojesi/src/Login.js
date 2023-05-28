import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./firebaseConfig";
import { useHistory } from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        console.log(email);

        history.push(`/user/${email}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#cbe1ef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "navy",
          color: "white",
          padding: "20px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h1>En Güncel Haber Sitesi</h1>
        <button
          style={{
            display: "block",
            margin: "0 auto",
            marginTop: "10px",
          }}
          onClick={signInWithGoogle}
        >
          Oturum Aç
        </button>
      </div>
    </div>
  );
};

export default Login;


