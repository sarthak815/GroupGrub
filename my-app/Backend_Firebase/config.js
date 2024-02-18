import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_HvZ_5q5jkgMlBJNlqssAE-FAht7cBF0",
  authDomain: "groupgrubtreehacks2024.firebaseapp.com",
  projectId: "groupgrubtreehacks2024",
  storageBucket: "groupgrubtreehacks2024.appspot.com",
  messagingSenderId: "338720668615",
  appId: "1:338720668615:web:6b7ac5c1a0ab0a02ed77e2",
  measurementId: "G-JZ8FRXYG5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
  
export const db = getFirestore(app);

// const [posts, setPosts] = useState([]);
//   // () => navigation.navigate('Details')

//   const seeData = async() => {
//     console.log("yoofufd");
//     //const mock_collection = collection(db, "Mock_Data");
//     try{
//       console.log("hello");
//       const data = await getDocs(collection(db, "Mock_Data"));
//       const filteredData = data.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }))
//       console.log(filteredData);
//     }catch(err){
//       console.log("There is an error: ", err);
//     }
//   }