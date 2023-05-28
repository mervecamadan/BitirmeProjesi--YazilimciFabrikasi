import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4P6b5pE1dvu6-qebiY2wf0NNkCWbwZPE",
  authDomain: "yeniproje-7154b.firebaseapp.com",
  projectId: "yeniproje-7154b",
  storageBucket: "yeniproje-7154b.appspot.com",
  messagingSenderId: "724204449393",
  appId: "1:724204449393:web:8ffed76ee0710e1fea35d0",
  measurementId: "G-YNNFE8EMFB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
