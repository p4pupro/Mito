import * as React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Text, View, FontAwesome5 } from '../components/Themed';
import Layout from '../constants/Layout';
import { Colors } from '../constants/Colors';
import { useTranslation } from 'react-i18next';
import useColorScheme from '../hooks/useColorScheme';
const DEVICE_WIDTH = Dimensions.get("window").width;


export default function Notifications() {
  const colorScheme = useColorScheme();
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={[styles.separator, {borderColor: Colors.app[colorScheme].borderColorNotification} ]}>
      <View style={styles.bellContainer}>
        <FontAwesome5
          name={'bell'}
          size={Layout.isLargeDevice ? 35 : 25}
          color='#4B46EB'
        />
      </View>
       <TouchableOpacity>
          <Text  style={styles.txt}>
            { t("MESSAGE_NOTIFICATION") }
          </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: Colors.app['light'].borderColorNotification,
    width: DEVICE_WIDTH * 0.88
  },
  bellContainer: {
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: "5%"
  },
  txt: {
    textAlign: "center",
    fontSize: Layout.isLargeDevice ? 22 : 18,
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "5%",
  },
});