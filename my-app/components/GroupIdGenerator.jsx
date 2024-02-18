import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';
import { joinGroup } from './QR_Code_Funcs';
import { auth, db } from '../Backend_Firebase/config';
import { doc, updateDoc, getDoc } from '@firebase/firestore';
import LocationComponent from './LocationComponent';

const GroupIdGenerator = ({navigation}) => {
  const [gpId, setGroupId] = useState('');
  const [response, setResponse] = useState(null);
  const [userData, setUserData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchUserDataAndLocation = async () => {
      await fetchUserData();
      await fetchCurrentLocation();
    };

    fetchUserDataAndLocation();
  }, []);

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    }
  };

  const fetchCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  // Function to get user details by userId
async function getUserDetails(userId) {
  const userDocRef = doc(db, 'users', userId);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data(); // Return the user data object
  } else {
    console.log('No user found with id:', userId);
    return null;
  }
}

// Function to get all members' cuisine and dietary restrictions for a given group
async function getGroupMembersDetails(groupId) {
  const groupDocRef = doc(db, 'groups', groupId);
  const groupDocSnap = await getDoc(groupDocRef);

  if (groupDocSnap.exists()) {
    const groupData = groupDocSnap.data();
    const members = groupData.members;
    
    const userDetailsPromises = members.map(userId => getUserDetails(userId));
    const usersData = await Promise.all(userDetailsPromises);
    
    // Filter out any null values (in case a user wasn't found)
    const filteredUsersData = usersData.filter(userData => userData != null);

    // Concatenate all cuisines and dietary restrictions into separate strings
    const allCuisines = filteredUsersData.map(userData => userData.cuisine).join(', ');
    const allDietaryRestrictions = filteredUsersData.map(userData => userData.dietaryRestrictions).join(', ');

    return {
      allCuisines,
      allDietaryRestrictions
    };
  } else {
    console.log('No group found with id:', groupId);
    return {
      allCuisines: '',
      allDietaryRestrictions: ''
    };
  }
}


  const makeApiCall = async (callback) => {
    let cuisinesString = "";
    let dietaryRestrictionsString = "";

    await getGroupMembersDetails(gpId).then(details => {
      console.log("one ", details.allCuisines);
      cuisinesString += details.allCuisines;
      console.log("hello ", cuisinesString);
      console.log("two ", details.allDietaryRestrictions);

      dietaryRestrictionsString += details.allDietaryRestrictions;
      console.log("hello22 ", dietaryRestrictionsString);
      // Now you have two separate variables:
      // cuisinesString - a string of all cuisines from the group members
      // dietaryRestrictionsString - a string of all dietary restrictions from the group members
    
      // You can use these variables as needed in your application
    });
    // try {
    //   // Fetch the document
    //   const groupDocSnap = await getDoc(groupDocRef);

    //   // Check if the document exists
    //   if (groupDocSnap.exists()) {
    //     // Get the data from the document
    //     const groupData = groupDocSnap.data();

    //     // Access the members array
    //     const members = groupData.members;
    //     return members; // This is your array of members
    //   } else {
    //     console.log('No such document!');
    //     return null;
    //   }
    // } catch (error) {
    //   console.error('Error getting document:', error);
    //   return null;
    // }

    // const refcoll = collection("groups", gpId);
    // const d = await getDoc(refcoll);
    // const allMembers = d["members"].map((doc) => ({
    //   retu
    // }))
    // const userData = auth.currentUser;
    // // if (!location || !userData) {
    // //   console.log('Missing location or user data');
    // //   return;
    // // }



    const url = 'http://ec2-18-144-29-168.us-west-1.compute.amazonaws.com/search';
    const data = {
      categories: cuisinesString,
      keywords: dietaryRestrictionsString,
      latitude: 37.7749,
      longitude: -122.4194,
      price: '$' 
    }

    // const data = {
    //   categories: userData.cuisine,
    //   keywords: userData.dietaryRestrictions + userData.foodRec,
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    //   price: userData.money,
    // };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonResponse = await response.json();
      setResponse(jsonResponse);
      console.log('Response:', jsonResponse);
    } catch (error) {
      console.error('There was an error!', error);
    }
    callback();
  };

  const generateGroupId = async () => {
    const randomId = Math.random().toString(36).substr(2, 10);
    setGroupId(randomId);
    const user = auth.currentUser;
    if (user) {
      await joinGroup(user.uid, randomId);
    }
  };

  const handleNext = async () => {
    if (gpId) {
      const groupDocRef = doc(db, 'groups', gpId);
      console.log("11111111111111111111111\n")
      await updateDoc(groupDocRef, { navigate: true });
      console.log("2222222222")
        await makeApiCall(()=>{
          navigation.navigate('BlankPage');
        });
      // console.log("3333333333333")
      //   console.log("second ", err);
      
    } else {
      console.log('Group ID is not set');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Generate Group ID" onPress={generateGroupId} />
      {gpId !== '' && <Text style={{ marginTop: 20 }}>Group ID: {gpId}</Text>}
      <View>
        <QRCodeGenerator groupId={gpId}></QRCodeGenerator>
        <Button
            title="Next"
            onPress={() => handleNext()} // Assuming 'BlankPage' is the name of your new route
          />
          <LocationComponent></LocationComponent>
      </View>
    </View>
  );
};

export default GroupIdGenerator;