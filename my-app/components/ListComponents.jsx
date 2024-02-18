import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';


import { db } from '../Backend_Firebase/config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export const ListMembers = ({ route, navigation }) => {
  //   console.log(route);
  //   const {groupId} = route.params;
  //   console.log(groupId);
  // const [members, setMembers] = useState([]);
  const { groupId } = route.params;
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Listening for real-time updates
    const groupDocRef = doc(db, "groups", groupId);
    const unsubscribe = onSnapshot(groupDocRef, (doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
        const data = doc.data();
        if (data.members) {
          setMembers(data.members);
        }
        // Check if navigate field is true, then navigate
        if (data.navigate === true) {
          navigation.navigate('BlankPage'); // Ensure 'BlankPage' is correctly configured in your navigation
        }
      } else {
        console.log("No such document!");
      }
    });

    // Polling removed as onSnapshot provides real-time updates

    return () => unsubscribe(); // This will unsubscribe on component unmount
  }, [groupId, navigation]); // Adding navigation as a dependency
  // useEffect(() => {
  //   const seeData = async(callback) => {
  //       try {
  //           const groupDocRef = doc(db, "groups", groupId);
  //           const docSnap = await getDoc(groupDocRef);
        
  //           if (docSnap.exists()) {
  //               // console.log("helleleelele")
  //             console.log("Document data:", docSnap.data());
  //              // This will return the document's data
  //             callback(docSnap.data()["members"]);
  //           } else {
  //             // doc.data() will be undefined in this case
  //             console.log("No such document!");
  //             callback(null);
  //           }
  //         } catch (e) {
  //           console.error("Error getting document from groups collection: ", e);
  //           callback(null);
  //         }
  //   }
  //   const interval = setInterval(() => {
  //       // Function to fetch data from your database
  //       seeData((members) => {
  //           if (members) {
  //               console.log(members);
  //               setMembers(members);
  //           }
  //       });
  //       const groupDocRef = doc(db, "groups", groupId);
  //       const unsubscribe = onSnapshot(groupDocRef, (doc) => {
  //         if (doc.exists() && doc.data().navigate === true) {
  //           navigation.navigate('BlankPage'); // Adjust navigation as necessary
  //         }
  //       });
  //       unsubscribe();
  //     }, 2000); // Polling every 5 seconds
    
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <View style={styles.listContainer}>
      {members.map((memberId) => (
        <View key={memberId} style={styles.listItem}>
          <Text>{memberId}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
    listContainer: {
      padding: 10,
    },
    listItem: {
      flexDirection: 'row',
      padding: 10,
    },
  });

export default ListMembers;