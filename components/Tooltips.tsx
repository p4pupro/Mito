import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Tooltip } from "react-native-elements";
import { View, Text, FontAwesome5 } from "../components/Themed";
import Layout from "../constants/Layout";


// Custom Tooltip to use in easy way and 
// improve user experience 
const Tooltips = (props: any) => {

  const { icon } = props;
  
  return (
    <Tooltip
      width={Platform.OS === "ios" ? 300 : 300}
      height={Platform.OS === "ios" ? 60 : 60}
      popover={<Text style={styles.contentText}>{props.message}</Text>}
    >
      {
        icon ?
          <View style={styles.iconContainer}>
            <FontAwesome5
              name={'info-circle'}
              size={Layout.isLargeDevice ? 35 : 25}
            />
            <Text style={styles.text}>
              {props.headerTitleMessage}
            </Text>
          </View>
          :
          <Text style={styles.text}>
            {props.headerTitleMessage}
          </Text>
      }

    </Tooltip>
  );
}

export default Tooltips;

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