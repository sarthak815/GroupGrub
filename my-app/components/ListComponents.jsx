import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';


import { db } from '../Backend_Firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ListMembers = ({ route, navigation }) => {
    console.log(route);
    const {groupId} = route.params;
    console.log(groupId);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const seeData = async(callback) => {
        try {
            const groupDocRef = doc(db, "groups", groupId);
            const docSnap = await getDoc(groupDocRef);
        
            if (docSnap.exists()) {
                console.log("helleleelele")
              console.log("Document data:", docSnap.data());
               // This will return the document's data
              callback(docSnap.data()["members"]);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              callback(null);
            }
          } catch (e) {
            console.error("Error getting document from groups collection: ", e);
            callback(null);
          }
    }
    const interval = setInterval(() => {
        // Function to fetch data from your database
        seeData((members) => {
            if (members) {
                console.log(members);
                setMembers(members);
            }
        });
      }, 2000); // Polling every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.listContainer}>
      {members.map((memberId) => (
        <View key={memberId} style={styles.listItem}>
          <Text>{memberId}</Text>
        </View>
      ))}
      <Button
        title="Next"
        onPress={() => navigation.navigate('BlankPage')} // Assuming 'BlankPage' is the name of your new route
      />
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