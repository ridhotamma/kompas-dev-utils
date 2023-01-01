// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebase_api_key,
  authDomain: process.env.firebase_auth_domain,
  projectId: process.env.firebase_project_id,
  storageBucket: process.env.firebase_storage_bucket,
  messagingSenderId: process.env.firebase_messaging_sender_id,
  appId: process.env.firebase_app_id,
  measurementId: process.env.firebase_measurement_id,
}

export default firebaseConfig
