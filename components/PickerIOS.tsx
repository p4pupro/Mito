import React from "react";
import { ActionSheetIOS, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "../components/Themed";
import FontSize from "../constants/FontSize";
import Layout from "../constants/Layout";
import useColorScheme from "../hooks/useColorScheme";

const onIOSButton = (props: any) => {
  let options = props.carteras.map((item: any, i: number) => {
    return item.label;
  });
  options.push("Cerrar");
  ActionSheetIOS.showActionSheetWithOptions(
    {
      options: options,
      cancelButtonIndex: options.length - 1
    },
    buttonIndex => onIOSButtonPick(props, buttonIndex)
  );
};

const onIOSButtonPick = (props: any, buttonIndex: number) => {
  if (
    buttonIndex < props.carteras.length &&
    buttonIndex !== props.selectedValue
  ) {
    if (
      typeof props.selectedValue === "undefined" ||
      (typeof props.selectedValue !== "undefined" &&
        buttonIndex != findIndexForValue(props, props.selectedValue))
    ) {
      props.onValueChange(props.carteras[buttonIndex], buttonIndex);
    }
  }
};

const findIndexForValue = (props: any, searchValue: any) => {
  for (let i = 0; i < props.carteras.length; i++) {
    if (props.carteras[i].value == searchValue) {
      return i;
    }
  }
  return -1;
};


// Custom Picker to IOS using ActionSheetIOS
// to improve user experience
export const PickerIOS = (props: any) => {

    const colorScheme = useColorScheme();
return(
  
    <TouchableOpacity
      style={styles.btnPickerIos}
      onPress={() => onIOSButton(props)}
    > 
    <LinearGradient
        colors={Colors.app[colorScheme].linearGradient}
        start={{ y: 0.0, x: 0.0 }}
        end={{ y: 0.0, x: 1.0 }}
        style={styles.linearGradient}
      >
      <View style={styles.rowPicker}>
        <View style={styles.columnOnePicker}>
          <Text style={styles.textBtn}>
            { props.selectedLabel }
          </Text>
        </View>
        <View style={styles.columnTwoPicker}>
          <FontAwesome5
              name={"angle-down"}
              size={Layout.isLargeDevice ? 30 : Layout.isSmallDevice ? 22 : 25}
              color="#fff"
            />
        </View> 
      </View>
    </LinearGradient>
    </TouchableOpacity>
 
);
};

const styles = StyleSheet.create({
  rowPicker: {
    flexDirection: "row",
    width: "90%",
    height: "90%",
    alignSelf:"center", 
    alignContent:"center",
    justifyContent: "center",
    alignItems:"center"
  },
  columnOnePicker: {
    flexDirection: "column",
    justifyContent:"center",
    alignSelf: "center",
    alignContent: "center",
    width: "85%",
    height:"100%"
  },
  columnTwoPicker: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: Layout.isLargeDevice ? "1%" : "2%",
    right: Layout.isLargeDevice ? "5%" :"20%",
    alignSelf: "center",
    alignContent: "center",
    width: "15%",
    height:"100%"
  },
  btnPickerIos: {
    width: "60%",
    height: "6%",
    justifyContent:"center",
    alignContent:"center",
    alignSelf: "center",
    marginBottom: "25%"
  },
  textBtn: {
    fontSize: Layout.isLargeDevice ? FontSize().titles.largeFontSize : Layout.isSmallDevice ? FontSize().text.smallFontSize : FontSize().titles.mediumFontSize,
    color: Colors.app.dark.text,
    textDecorationColor: Colors.app.dark.text,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold"
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    borderRadius: Layout.isLargeDevice ? 30 : Layout.isSmallDevice ? 13 : 20,
  }
});
