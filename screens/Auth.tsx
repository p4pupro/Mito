import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FontAwesome5, ActivityIndicator } from '../components/Themed';
import { TouchableOpacity, Dimensions, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from '../constants/Colors';
import Layout from '../constants/Layout';
import { KeyboardAvoidingView, StyleSheet, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Logo from '../components/Logo';
import useColorScheme from '../hooks/useColorScheme';
import { useRecoilState } from 'recoil';
import { authInfo } from '../api/authInfo';
import { useTranslation } from 'react-i18next';
import * as LocalAuthentication from 'expo-local-authentication';
import FaceId from '../components/FaceId';


const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export const Auth = () => {

    const { t } = useTranslation();
    const [logged, setLogged] = useRecoilState(authInfo);
    const [modalVisible, setModalVisible] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [failedCount, setFailedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const colorScheme = useColorScheme();
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        isPassShow: false,
        isFormDirty: false,
    });

    const { username, password, isPassShow, isFormDirty } = formState;


    useEffect(() => {

    }, [formState]);

    const doLogin = () => {
        setIsLoading(true);
        setLogged({ username: username });
    };


    const handleUsernameChange = (text: string) => {
        setFormState({
            ...formState,
            username: text
        });
    };

    const handlePasswordChange = (text: string) => {
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

    const checkDeviceForHardware = async () => {
        const compatible = await LocalAuthentication.supportedAuthenticationTypesAsync();
        if (compatible[0] == 2) {
            const haveBiometric = await LocalAuthentication.isEnrolledAsync();
            if (haveBiometric) {
                scanFaceId();
            }
        }
    };

    const scanFaceId = async () => {
        const options = { promptMessage: "This message is just to iOS", fallbackLabel: "Use your PassCode..." };
        try {
            const results = await LocalAuthentication.authenticateAsync(
                options
            );
            console.log(results);
            if (results.success) {
                setModalVisible(true);
                setAuthenticated(true);
                setFailedCount(0);
                setLogged({ username: 'ios user' });
            } else {
                setFailedCount(failedCount + 1);
            }
        } catch (e) {
            console.log(e);
        }
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
                        <Logo />
                        <Text style={styles.header}>{t("WELCOME")}</Text>
                        <View style={styles.inputContainer}>
                            <FontAwesome5
                                name={Platform.OS === 'ios' ? 'user' : 'user'}
                                size={Layout.isLargeDevice ? 35 : 25}
                                color='#4B46EB'
                            />
                            <TextInput
                                autoCorrect={false}
                                value={username}
                                onChangeText={handleUsernameChange}
                                autoCapitalize='none'
                                keyboardType='email-address'
                                placeholder={t("USERNAME")}
                                style={[styles.textInput, { color: Colors.app[colorScheme].text }]}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <FontAwesome5
                                name={Platform.OS === 'ios' ? 'unlock' : 'unlock'}
                                size={Layout.isLargeDevice ? 35 : 25}
                                color='#4B46EB'
                            />
                            <TextInput
                                secureTextEntry={!isPassShow}
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={password}
                                onChangeText={handlePasswordChange}
                                placeholder={t("PASSWORD")}
                                style={[styles.textInput, { color: Colors.app[colorScheme].text }]}

                            />
                            <TouchableOpacity
                                style={styles.btnEye}
                                onPress={handleShowPass}
                            >
                                <FontAwesome5
                                    name={isPassShow ? 'eye-slash' : 'eye'}
                                    size={Layout.isLargeDevice ? 30 : 20}
                                    color='#4B46EB'
                                />
                            </TouchableOpacity>

                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.btnForgotPcw}
                                onPress={handleForgetPcw}
                            >
                                <Text
                                    style={styles.textForgotPcw}
                                >
                                    {t("FORGETPWC")}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <FaceId
                            checkDeviceForHardware={checkDeviceForHardware}  
                        />

                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                    style={styles.btnLogin}
                                    onPress={doLogin}
                                >
                            <LinearGradient
                                colors={isFormDirty
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
                                
                                    <Text
                                        style={styles.textBtn}
                                    >
                                        {t("SIGNIN")}
                                    </Text>
                                
                            </LinearGradient>
                            </TouchableOpacity>
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
        width: DEVICE_WIDTH * 0.5,
        height: DEVICE_HEIGHT * 0.063,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",    
    },
    linearLoginDisable: {
        width: "100%",
        height: "100%",
        opacity: 0.6,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    linearLogin: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
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
    },
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
