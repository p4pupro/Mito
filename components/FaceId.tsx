import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import FaceIdIcon from '../assets/images/icon/ios/faceid-icon.jpg';


const FaceId = (props: any) => {

   const { checkDeviceForHardware } = props;

    return (
        <TouchableOpacity
            style={styles.btnLocalAuth}
            onPress={checkDeviceForHardware}
        >
            <Image
                style={styles.iconLocalAuth}
                source={FaceIdIcon}
            />
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    btnLocalAuth: {
        alignSelf: "center",
        width: "20%",
        height: "10%",
        justifyContent: "center"
    },
    iconLocalAuth: {
        alignSelf: "center",
        width: "100%",
        height: "100%",
    }
});

export default FaceId;