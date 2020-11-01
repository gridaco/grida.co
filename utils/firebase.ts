import firebase from 'firebase/app';
import "firebase/analytics"

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBuket: process.env.FIREBASE_STORAGE_BUKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.FIREBASE_MEASYREMENT_ID
}

export default typeof window !== 'undefined' ? !firebase.apps.length ? firebase.initializeApp(config) : firebase.app() : undefined;