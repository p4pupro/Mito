import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import FingerIdIcon from "../assets/images/icon/android/fingerid-icon-pro.png";

const FingerId = (props: any) => {
  const { scanFingerId } = props;

  return (
    <TouchableOpacity style={styles.btnLocalAuth} onPress={scanFingerId}>
      <Image style={styles.iconLocalAuth} source={FingerIdIcon} />
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

export default FingerId;
