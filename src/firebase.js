import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCr4um0_CaKE-oaDzOdGjAvBJWkFl67O3A",
  databaseURL : "https://infrastructurenitkkr-2c2be-default-rtdb.firebaseio.com",
  authDomain: "infrastructurenitkkr-2c2be.firebaseapp.com",
  projectId: "infrastructurenitkkr-2c2be",
  storageBucket: "infrastructurenitkkr-2c2be.appspot.com",
  messagingSenderId: "1062434415992",
  appId: "1:1062434415992:web:736aeb528dc3ad7d68148d",
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
