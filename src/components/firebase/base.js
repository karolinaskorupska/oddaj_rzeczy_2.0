import * as firebase from 'firebase/app';
import "firebase/auth";

const app=firebase.initializeApp({
    apiKey: " AIzaSyAYtKfB6EWLGdEge2bmMmvh1i7s4pnGVtc ",
    authDomain: "oddaj-rzeczy-2.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-2.firebaseio.com",
    projectId: "oddaj-rzeczy-2",
    storageBucket: "oddaj-rzeczy-2.appspot.com",
    messagingSenderId: "59158629530",
    appId: "1:59158629530:web:60c5ecf4acf5af9ab02323"
});

export default app;