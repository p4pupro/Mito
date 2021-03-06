import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import FaceIdIcon from "../assets/images/icon/ios/faceid-icon.png";

const FaceId = (props: any) => {
  const { scanFaceId } = props;

  return (
    <TouchableOpacity style={styles.btnLocalAuth} onPress={scanFaceId}>
      <Image style={styles.iconLocalAuth} source={FaceIdIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLocalAuth: {
    alignSelf: "center",
    width: "20%",
    height: "10%",
    justifyContent: "center",
  },
  iconLocalAuth: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});

export default FaceId;
