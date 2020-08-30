import React, { useState, useEffect } from 'react';
import { translate } from '../constants/Locale';
import { View, Text, TextInput, FontAwesome5, ActivityIndicator } from '../components/Themed';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from '../constants/Colors';
import Layout from '../constants/Layout';
import { KeyboardAvoidingView, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import Logo from '../components/Logo';
import useColorScheme from '../hooks/useColorScheme';
import { useRecoilState } from 'recoil';
import { authInfo } from '../api/authInfo';



export const Auth = () => {

    const [logged, setLogged] = useRecoilState(authInfo);
    const [isLoading, setIsLoading] = useState(false);
    const colorScheme = useColorScheme();
    const [ formState, setFormState ] = useState({
        username: '',
        password: '',
        isPassShow: false,
        isFormDirty: false,
    });
    
    const { username, password, isPassShow, isFormDirty } = formState;
    

    useEffect( () => {
        
    }, [formState]);

    const doLogin = () => {
        setIsLoading(true);
        setLogged({username: username});
    };


    const handleUsernameChange = (text:string) => {
        setFormState({
            ...formState,
            username: text
        });
    };

    const handlePasswordChange = (text:string) => {
        setFormState({
            ...formState,
            password: text
        });
    };

    const handleShowPass = () => {
        isPassShow == true ? 
            setFormState({
                ...formState,
                isPassShow: false
            })
        :
            setFormState({
                ...formState,
                isPassShow: true
            })
    };

    const handleForgetPcw = () => {

    };

  return (

    isLoading ? 
        <View style={styles.inner}>
            <ActivityIndicator
                size='large'
                color='#6B52AF'
                animating
            /> 
        </View>
    :
        <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Logo/>
                <Text style={styles.header}>{translate("WELCOME")}</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        name={Platform.OS === 'ios' ? 'user' : 'user'}
                        size={Layout.isLargeDevice ? 35 : 25}
                        color='#4B46EB'
                    />
                    <TextInput
                        autoCorrect={false}
                        value={ username }
                        onChangeText={ handleUsernameChange }
                        autoCapitalize='none'
                        keyboardType='email-address'
                        placeholder={translate("USERNAME")}
                        style={[styles.textInput, {color: Colors.app[colorScheme].text}]} 
                    />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        name={Platform.OS === 'ios' ? 'unlock' : 'unlock'}
                        size={Layout.isLargeDevice ? 35 : 25}
                        color='#4B46EB'
                    />
                    <TextInput
                        secureTextEntry={ !isPassShow }
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={ password }
                        onChangeText={ handlePasswordChange }
                        placeholder={translate("PASSWORD")} 
                        style={[styles.textInput, {color: Colors.app[colorScheme].text}]} 
                        
                    />
                    <TouchableOpacity
                        style={styles.btnEye}
                        onPress={ handleShowPass }
                    >
                        <FontAwesome5
                            name={ isPassShow ? 'eye-slash' : 'eye' }
                            size={ Layout.isLargeDevice ? 30 : 20 }
                            color='#4B46EB'
                        />
                    </TouchableOpacity>
                
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.btnForgotPcw}
                        onPress={ handleForgetPcw }
                    >
                    <Text
                        style={styles.textForgotPcw}
                    >
                        { translate("FORGETPWC") }
                    </Text>    
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                     <LinearGradient
                        colors={ isFormDirty
                            ? Colors.app.light.linearGradient
                            : Colors.app.light.linearGradientPrestine
                        }
                        style={
                        !username || !password
                            ? styles.linearLoginDisable
                            : styles.linearLogin
                        }
                        start={{ y: 0.0, x: 0.0 }}
                        end={{ y: 0.0, x: 1.0 }}
                    >
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={ doLogin }
                        >
                            <Text
                                style={styles.textBtn}
                            >
                                { translate("SIGNIN") }
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>    
                </View>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    fontSize: 36,
    marginBottom: 20
  },
  textInput: {
    fontSize: Layout.isLargeDevice ? 30 : 18,
    height: Layout.isLargeDevice ? 80 : 50,
    width: "80%",
    paddingLeft: "5%",
    borderBottomWidth: 1,
    marginBottom: 5
  },
  inputContainer: {
    flexDirection: 'row',
    height: Layout.isLargeDevice ? 60 : 40,
    width: '90%',
    alignSelf: "center",
    alignContent: "space-around",
    alignItems: "center",
    textAlignVertical: "center"
  },
  btnContainer: {
    width: "50%",
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
    width: '100%',
    height: 50,
    borderRadius: 3
  },
  linearLogin : {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: '100%',
    height: 50,
    borderRadius: 3
  },
  textBtn: {
    color: Colors.app?.dark.text,
    fontSize: Layout.isLargeDevice ? 22 : 16,
    fontWeight: 'bold'
  },
  textForgotPcw: {
    fontSize: Layout.isLargeDevice ? 22 : 16,
  },
  btnForgotPcw: {
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnRecoil: {
      backgroundColor: 'red'
  }

});
