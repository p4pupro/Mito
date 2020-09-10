import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed'; 
import { LinearGradient } from 'expo-linear-gradient';
import i0 from '../../assets/images/intro/presentation01.png';
import i1 from '../../assets/images/intro/presentation02.png';
import i2 from '../../assets/images/intro/presentation03.png';
import Layout from '../../constants/Layout';
import { Colors } from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { useTranslation } from 'react-i18next';



const Page = ({ route, navigation }: any) => {
  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  const images = {
    Page0: { img: i0 },
    Page1: { img: i1 },
    Page2: { img: i2 }
  };
  
  const texts = {
    Page0: {
      text: t("PAGE0_TEXT")
    },
    Page1: {
      text: t("PAGE1_TEXT"),
      subText: t("PAGE1_SUB_TEXT")
    },
    Page2: {
      text: t("PAGE2_TEXT")
    }
  };

  const _toLogIn = () => {
    navigation.navigate('Auth', {
      screen: 'Auth',
    });
  }
  return (
    route.name !== 'Page2' ? (
    <View style={styles.container}>
      <Image
          style={route.name !== "Page2" ? styles.image : styles.image2}
          source={ images[route.name].img }
        />
    
       <Text style={[styles.text, {color: Colors.app[colorScheme].text}]} >{texts[route.name].text}</Text>

        {route.name === "Page1" && (
          <Text style={[styles.subText, {color: Colors.app[colorScheme].text}]}> {texts[route.name].subText} </Text>
        )} 
        <TouchableOpacity style={styles.skip} onPress={() => _toLogIn(navigation)}>
        <Text style={[styles.textSkip, {color: Colors.app[colorScheme].textSkip}]}>{ t("AVOIDINTRO") }</Text>
        </TouchableOpacity>
    </View>
  ) : (
    <View style={[styles.container, {backgroundColor: Colors.app[colorScheme].background }]}>
        <Image
            style={styles.image}
            source={images[route.name].img}
        />
        <Text style={[styles.text, {color: Colors.app[colorScheme].text}]} >{texts[route.name].text}</Text>
        <TouchableOpacity style={styles.button} onPress={ _toLogIn }>
            <LinearGradient
                colors={Colors.app[colorScheme].linearGradient}
                style={styles.btnLinear}
                start={{ y: 0.0, x: 0.0 }}
                end={{ y: 0.0, x: 1.0 }}
            >
                <Text style={[styles.textGoLogin, {color: Colors.app.dark.text}]}>
                  { t("GOAUTH") }
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  ));
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    image: {
        height: '60%',
        width: '80%',
        marginBottom: 40,
        resizeMode: "contain",
        marginTop: 10
      },
      image2: {
        height: '70%',
        width: '90%',
        marginBottom: 50,
        resizeMode: 'contain',
      },
      text: {
        fontSize: Layout.isLargeDevice ? 20 : 16,
        textAlign: 'center',
        textAlignVertical: "center",
        alignSelf: 'center',
        padding: 5,
      },
      subText: {
        fontSize: Layout.isLargeDevice ? 25 : 12,
        textAlign: 'center',
        alignSelf: 'center',
      },
      btnLinear: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 3
      },
      button: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '60%',
        height: 50,
        borderRadius: 3
      },
      skip: {
        paddingTop: 20,
        alignSelf: 'center',
      },
      textSkip: {
        fontSize: Layout.isLargeDevice ? 25 : 18,
        textAlign: 'center',
        textAlignVertical: "center",
        alignSelf: 'center',
        padding: 5,
      },
      textGoLogin: {
        
      }
  });

  export default Page;