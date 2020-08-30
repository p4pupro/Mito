import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Tooltip } from "react-native-elements";
import { Text } from "../components/Themed";

// Custom Tooltip to use in easy way and 
// improve user experience 
 const Tooltips = (props: any) => {

    return (
      <Tooltip
        width={Platform.OS === "ios" ? 300 : 300}
        height={Platform.OS === "ios" ? 60 : 60}
        popover={<Text style={styles.contentText}>{props.message}</Text>}
      >
        <Text style={styles.text}>
          {props.headerTitleMessage}
        </Text>
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
  }
});