import { db } from "../Backend_Firebase/config";

export const joinGroup = async (userId, groupId) => {
    const groupRef = db.collection('groups').doc(groupId);
    await groupRef.update({
      members: firebase.firestore.FieldValue.arrayUnion(userId)
    });
  
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      groups: firebase.firestore.FieldValue.arrayUnion(groupId)
    });
  };

  