import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';
import { joinGroup } from './QR_Code_Funcs';
import { auth, db } from '../Backend_Firebase/config';
import { doc, updateDoc } from '@firebase/firestore';

const GroupIdGenerator = ({navigation}) => {
  const [gpId, setGroupId] = useState('');
  const handleDoneClick = async () => {
    const groupDocRef = doc(db, "groups", gpId);
    console.log("okk")
    await updateDoc(groupDocRef, {
      navigate: true,
    });

    navigation.navigate('BlankPage');
  };

  const generateGroupId = async() => {
    // Generate a random 10-character string
    const randomId = Math.random().toString(36).substr(2, 10);
    setGroupId(randomId);
    const user = auth.currentUser;
    if(user){
      await joinGroup(user.uid, randomId);
    }
    console.log(user);
    console.log(user.uid);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Generate Group ID" onPress={generateGroupId} />
      {gpId !== '' && <Text style={{ marginTop: 20 }}>Group ID: {gpId}</Text>}
      <View>
        <QRCodeGenerator groupId={gpId}></QRCodeGenerator>
        <Button
            title="Next"
            onPress={() => handleDoneClick()} // Assuming 'BlankPage' is the name of your new route
          />
      </View>
    </View>
  );
};

export default GroupIdGenerator;