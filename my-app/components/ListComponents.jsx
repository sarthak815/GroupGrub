import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

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
            // console.log("yoofufd");
            // //const mock_collection = collection(db, "Mock_Data");
            // try{
            //   const data = await getDocs(collection(db, "groups", groupId));
            //   const filteredData = data.docs.map((doc) => ({
            //     ...doc.data(),
            //     id: doc.id,
            //   }))
            //   console.log(filteredData);
            // }catch(err){
            //   console.log("There is an error: ", err);
            // }
    }
    seeData((members) => {
        if (members) {
            console.log(members);
            setMembers(members);
        }
    });
    // const groupRef = firebase.firestore().collection('groups').doc(groupId);
    // groupRef.get().then((doc) => {
    //   if (doc.exists) {
    //     const groupData = doc.data();
    //     setMembers(groupData.members); // Assuming 'members' is an array of UIDs
    //   }
    // });
  }, []);

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