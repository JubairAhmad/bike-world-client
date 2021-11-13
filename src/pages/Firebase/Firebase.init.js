import firebaseConfig from "./Firebase.congig";
import { initializeApp } from "firebase/app";

const initializeAuthenticion=()=>{
    initializeApp(firebaseConfig);
}
export default initializeAuthenticion;