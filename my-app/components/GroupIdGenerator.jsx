import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';
import { joinGroup } from './QR_Code_Funcs';
import { auth } from '../Backend_Firebase/config';

const GroupIdGenerator = () => {
  const [gpId, setGroupId] = useState('');

  const generateGroupId = () => {
    // Generate a random 10-character string
    const randomId = Math.random().toString(36).substr(2, 10);
    setGroupId(randomId);
    const user = auth.currentUser;
    joinGroup(user.uid, randomId);
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Generate Group ID" onPress={generateGroupId} />
      {gpId !== '' && <Text style={{ marginTop: 20 }}>Group ID: {gpId}</Text>}
      <View>
        <QRCodeGenerator groupId={gpId}></QRCodeGenerator>
      </View>
    </View>
  );
};

export default GroupIdGenerator;
