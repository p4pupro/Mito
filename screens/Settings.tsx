import React, { useState } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Dimensions} from 'react-native';
import { Colors } from '../constants/Colors';
import Layout from '../constants/Layout';
import FontSize from '../constants/FontSize';
import { View, Text, TextInput, FontAwesome5, ActivityIndicator } from '../components/Themed';
import { LinearGradient } from "expo-linear-gradient";
import { translate } from '../constants/Locale';
import useColorScheme from '../hooks/useColorScheme';
import { useRecoilState } from 'recoil';
import { authInfo } from '../api/authInfo';

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export const Settings = () => {
  
    const [logged, setLogged] = useRecoilState(authInfo);
    const [isLoading, setIsLoading] = useState(false);
    const colorScheme = useColorScheme();
    const [ formState, setFormState ] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        isFormDirty: false,
    });
    
    const { username, email, phone, address, date } = formState;

    const handleChangePcw = () => {

    };

    const doLogout = () => {
      setIsLoading(true);
      setLogged({username: ''});
    };
    

  return (

      isLoading ? 
          <View style={styles.container}>
              <ActivityIndicator
                  size='large'
                  color='#6B52AF'
                  animating
              /> 
          </View>
      :
          
              <View style={styles.container}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.header}>{translate("USERNAME")}</Text>
                      <TextInput
                        value={ username }
                        editable={false}
                        style={[styles.textInput, {borderColor: Colors.app[colorScheme].text}]}
                      />
                      <FontAwesome5
                        name={Platform.OS === 'ios' ? 'user' : 'user'}
                        size={Layout.isLargeDevice ? 35 : 22}
                        color='orange'
                      />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.header}>{translate("EMAIL")}</Text>
                      <TextInput
                          editable={false}
                          value={ email }
                          style={[styles.textInput, {borderColor: Colors.app[colorScheme].text}]}
                      />
                      <FontAwesome5
                          name={Platform.OS === 'ios' ? 'envelope' : 'envelope'}
                          size={Layout.isLargeDevice ? 35 : 25}
                          color='orange'
                      />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.header}>{translate("PHONE")}</Text>
                      <TextInput
                          editable={false}
                          value={ phone }
                          style={[styles.textInput, {borderColor: Colors.app[colorScheme].text}]} 
                      />
                      <FontAwesome5
                          name={Platform.OS === 'ios' ? 'phone' : 'phone'}
                          size={Layout.isLargeDevice ? 35 : 25}
                          color='orange'
                      />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.header}>{translate("ADDRESS")}</Text>
                      <TextInput
                          editable={false}
                          value={ address }
                           style={[styles.textInput, {borderColor: Colors.app[colorScheme].text}]}
                      />
                       <FontAwesome5
                          name={Platform.OS === 'ios' ? 'map' : 'map'}
                          size={Layout.isLargeDevice ? 35 : 25}
                          color='orange'
                      />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.header}>{translate("DATE")}</Text>
                      <TextInput
                          editable={false}
                          value={ date }
                           style={[styles.textInput, {borderColor: Colors.app[colorScheme].text}]}
                      />
                      <FontAwesome5
                          name={Platform.OS === 'ios' ? 'calendar' : 'calendar'}
                          size={Layout.isLargeDevice ? 35 : 25}
                          color='orange'
                      />
                  </View>
                  <View>
                      <TouchableOpacity
                          style={styles.btnChangePcw}
                          onPress={ handleChangePcw }
                      >
                      <Text
                          style={styles.textForgotPcw}
                      >
                              { translate("CHANGEPWC") }
                      </Text>    
                      </TouchableOpacity>
                  </View>
                  <View style={styles.btnContainer}>
                      <LinearGradient
                          colors={Colors.app[colorScheme].linearGradientPrestine}
                          style={styles.linearLogin}
                          start={{ y: 0.0, x: 0.0 }}
                          end={{ y: 0.0, x: 1.0 }}
                      >
                          <TouchableOpacity
                              style={styles.btnLogin}
                              onPress={ doLogout }
                          >
                              <Text
                                  style={styles.textBtn}
                              >
                                  { translate("LOGOUT") }
                              </Text>
                          </TouchableOpacity>
                      </LinearGradient>
                  </View>
              </View>
    );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  header: {
    fontSize: Layout.isLargeDevice ? FontSize().text.largeFontSize : Layout.isSmallDevice ? FontSize().text.xsFontSize : FontSize().text.mediumFontSize,
    color: Colors.app.light.textFormColor,
    alignSelf: "flex-start",
    width: DEVICE_WIDTH * 0.17
  },
  textInput: {
    fontSize: Layout.isLargeDevice ? 30 : 18,
    height: Layout.isLargeDevice ? DEVICE_HEIGHT * 0.118 : DEVICE_HEIGHT * 0.073,
    width: DEVICE_WIDTH * 0.64,
    paddingLeft: "5%",
    borderBottomWidth: 1,
    marginBottom: 5
  },
  inputContainer: {
    flexDirection: 'row',
    height: Layout.isLargeDevice ? DEVICE_HEIGHT * 0.088 :  DEVICE_HEIGHT * 0.058,
    width: DEVICE_WIDTH * 0.9,
    alignItems: "center",
    textAlignVertical: "center",
  },
  btnContainer: {
    width: DEVICE_WIDTH * 0.7,
  },
  btnEye: {

  },
  btnLogin: {
    
  },
  linearLoginDisable: {
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.073,
    borderRadius: 3
  },
  linearLogin : {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: '100%',
    height: DEVICE_HEIGHT * 0.073,
    borderRadius: 3
  },
  textBtn: {
    color: 'white',
    fontSize: Layout.isLargeDevice ? 22 : 16,
    fontWeight: 'bold'
  },
  textForgotPcw: {
    fontSize: Layout.isLargeDevice ? 22 : 16,
    fontWeight: "bold",
  },
  btnChangePcw: {
    height: DEVICE_HEIGHT * 0.058,
    alignItems: "center",
    justifyContent: "space-around",
  }

});