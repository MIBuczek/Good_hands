import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAtJqfhKkSnhtM5nIxPmsv7Rh1Br-WzuUo",
    authDomain: "good-hands-14a34.firebaseapp.com",
    databaseURL: "https://good-hands-14a34.firebaseio.com",
    projectId: "good-hands-14a34",
    storageBucket: "good-hands-14a34.appspot.com",
    messagingSenderId: "742235574422",
    appId: "1:742235574422:web:8f6524c8a0e520a86ef2b7"
};

firebase.initializeApp(config);
const db = firebase.firestore();

export default db;