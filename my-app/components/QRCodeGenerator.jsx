import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = ({ groupId }) => {
    const [showQR, setShowQR] = useState(false);

    // Use an effect to monitor changes in groupId.
    // If groupId changes and is not empty, show the QR code.
    useEffect(() => {
        if (groupId !== '') {
        setShowQR(true);
        } else {
        setShowQR(false); // Optionally hide QR code if groupId is empty
        }
    }, [groupId]); // Dependency array includes groupId to trigger effect when it changes


//   const handleGenerateQR = () => {
//     setShowQR(true);
//   };

  return (
    <View style={styles.container}>
      {showQR && (
        <View style={styles.qrContainer}>
          <QRCode 
            value={groupId} 
            size={256}
            // `level` and `includeMargin` props are not needed/supported as their defaults are adequate
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 150,
  },
  qrContainer: {
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default QRCodeGenerator;
