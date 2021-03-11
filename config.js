import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBmaazJU7OOD80-b8O59BorA8WsrceFDlw",
    authDomain: "wily-app-7f39d.firebaseapp.com",
    databaseURL: "https://wily-app-7f39d-default-rtdb.firebaseio.com",
    projectId: "wily-app-7f39d",
    storageBucket: "wily-app-7f39d.appspot.com",
    messagingSenderId: "497198481689",
    appId: "1:497198481689:web:8819cbf01941902abd0588"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
