import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { auth } from '../Backend_Firebase/config';
import { joinGroup } from './QR_Code_Funcs';

const QRCodeScanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
        setUser(auth.currentUser);
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const groupId = data;
        console.log(groupId);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        if(user){
            joinGroup(user.uid, groupId, () => {
                console.log("inside QR_Scan ", groupId);
                navigation.navigate('List_Groups', { groupId: groupId });
            });
        }
        //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
};

export default QRCodeScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});