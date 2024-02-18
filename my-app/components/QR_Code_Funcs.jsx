import {  doc, setDoc, arrayUnion, updateDoc  } from "@firebase/firestore";
import { db } from "../Backend_Firebase/config";

export const joinGroup = async (userId, groupId, callback) => {
    // Ensure the groups collection and document for groupId exists
    try {
        const groupDocRef = doc(db, "groups", groupId);
        await setDoc(groupDocRef, {
            members: arrayUnion(userId)
        }, { merge: true }); // Use { merge: true } to update the document without overwriting it
        console.log("Document successfully written to groups collection!");
    } catch (e) {
        console.error("Error adding document to groups collection: ", e);
    }

    // Ensure the users collection and document for userId exists
    try {
        const userDocRef = doc(db, "users", userId);
        await setDoc(userDocRef, {
            groups: arrayUnion(groupId)
        }, { merge: true }); // Use { merge: true } to update the document without overwriting it
        console.log("Document successfully written to users collection!");
    } catch (e) {
        console.error("Error adding document to users collection: ", e);
    }
    callback();
};