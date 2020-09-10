import React from "react";
import { StyleSheet, Platform, Modal } from "react-native";


// Custom Modal to use in easy way and 
// improve user experience 
const Modals = (props: any) => {

 const {animationType, transparent, visible, children} = props;
  
  return (
    <Modal
        animationType={animationType ? animationType : 'fade'}
        transparent={transparent ? transparent : false}
        visible= {visible ? visible : false}
    >
     { children }

    </Modal>
  );
}

export default Modals;

const styles = StyleSheet.create({
  text: {
    textAlign: "justify",
    fontSize: Platform.OS === "ios" ? 18 : 14,
  },
  contentText: {
    textAlign: "justify",
    fontSize: Platform.OS === "ios" ? 11 : 10,
  }, 
  iconContainer: {
    alignItems: "center"
  }
});