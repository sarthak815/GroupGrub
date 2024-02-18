import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ListMembers = ({ groupId }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const groupRef = firebase.firestore().collection('groups').doc(groupId);
    groupRef.get().then((doc) => {
      if (doc.exists) {
        const groupData = doc.data();
        setMembers(groupData.members); // Assuming 'members' is an array of UIDs
      }
    });
  }, [groupId]);

  return (
    <ul>
      {members.map((memberId) => (
        <li key={memberId}>{memberId}</li> // Adjust according to how you want to display members
      ))}
    </ul>
  );
};
