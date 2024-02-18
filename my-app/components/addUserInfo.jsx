import {  doc, setDoc, arrayUnion, updateDoc  } from "@firebase/firestore";
import { db } from "../Backend_Firebase/config";

export const addInfo = async (userId, information, callback) => {
    // Ensure the users collection and document for userId exists
    try {
        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, {
            arrayofInfo: information
        }, { merge: true }); // Use { merge: true } to update the document without overwriting it
        console.log("Document successfully written to users collection!");
    } catch (e) {
        console.error("Error adding document to users collection: ", e);
    }
    callback();
};