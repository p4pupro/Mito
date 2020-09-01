import * as React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { View, Text, ActivityIndicator, FontAwesome5 } from '../components/Themed';
import { useState } from 'react';
import { PickerIOS } from '../components/PickerIOS';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useRecoilState } from 'recoil';
import { data, dataPicker } from '../api/pageOne';
import Tooltips  from '../components/Tooltips';
import Layout from '../constants/Layout';
import { useTranslation } from 'react-i18next';


const Page01 = () =>  {

  const [ isLoading, setIsLoading ] = useState(false);
  const colorScheme = useColorScheme();
  const [ picker, setPicker ] = useRecoilState(dataPicker);
  const { t, i18n } = useTranslation();


  const changeLang = (lang: string) => {
      i18n.changeLanguage(lang); 
  }

  return (

    isLoading ? 
      <View style={styles.activityContainer}>
        <ActivityIndicator
          animating
          color="#6B52AF"
          size="large"
        />
      </View>
    :
      <View style={styles.container}>
        <Text style={[styles.mitoName, { color: Colors.app[colorScheme].iconColor}]}>
          { t("MITO_NAME") }
        </Text>
        <Text style={styles.mito}>
          { t("MITO") }
        </Text>
        <Text style={styles.mitoDescription}>
          { t("MITO_DESCRIPTION") }
        </Text>
        <FontAwesome5
          name={'hand-point-down'}
          size={Layout.isLargeDevice ? 55 : 35}
        />
        <View style={styles.rowPicker}>
          <View style={styles.leftHeaderColunm}>
          
            { Platform.OS === "ios" ? (
                <PickerIOS
                  carteras={data}
                  selectedValue={picker.value}
                  selectedLabel={picker.label}
                  onValueChange={(itemValue: any) => {
                    setPicker(itemValue);
                  }}
                />
              ) : (
                <LinearGradient
                  colors={Colors.app[colorScheme].linearGradient}      
                  start={{ y: 0.0, x: 0.0 }}
                  end={{ y: 0.0, x: 1.0 }}
                >
                  <Picker
                    selectedValue={picker.value}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue: any, itemIndex) => {
                      setPicker(itemValue);
          
                    }}
                  >
                    {data.map((item: any, index) => {
                      return (
                        <Picker.Item
                          label={item.label}
                          value={item.value}
                          key={index}
                        />
                      );
                    })}
                  </Picker>
                </LinearGradient>
              )}

              <Tooltips
                 style={styles.tooltips}
                 headerTitleMessage={ t("TITLE_TOOLTIPS") }
                 message={ t("MESSAGE_TOOLTIPS") }
              />
              <Text style={styles.I18N}>
                { t("I18N_LOCALIZATION") }
              </Text>
              <View style={styles.rowFlags}>
              <TouchableOpacity
                style={{ marginLeft: 5, marginRight: 5}}
                onPress={ () => changeLang('en') }
              >
                <FontAwesome5
                  name={'flag-usa'}
                  size={Layout.isLargeDevice ? 35 : 25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 5, marginRight: 5}}
                onPress={ () => changeLang('es') }
              >
                <FontAwesome5
                  name={'font-awesome-flag'}
                  size={Layout.isLargeDevice ? 35 : 25}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 5, marginRight: 5}}
                onPress={ () => changeLang('fr') }
              >
                <FontAwesome5
                  name={'flag'}
                  size={Layout.isLargeDevice ? 35 : 25}
                />
              </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rightHeaderColunm}>
            <Text style={styles.textPicker}>
              { t("PICKER_MESSAGE") }
            </Text>
            <Text style={styles.textTooltip}>
              { t("TOOLTIP_MESSAGE") }
            </Text>
            <Text style={styles.textI18n}>
              { t("I18N_MESSAGE") }
            </Text>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  picker: {
    color: 'black', 
    backgroundColor: 'white',
  },
  leftHeaderColunm: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    paddingTop: "5%",
    alignItems: "center",
  },
  rightHeaderColunm: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    paddingTop: "10%",
    alignItems: "center",
  }, 
  rowPicker: {
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "space-around",
    alignItems: "center",
    width: "96%",
    height: "96%"
  },
  tooltips: {
    marginBottom: "5%"
  },
  textPicker: {
    marginBottom: "5%"
  },
  textTooltip: {
    marginBottom: "5%"
  },
  I18N: {
    fontSize: 18,
    marginBottom: "5%"
  },
  textI18n: {
    marginBottom: "5%"
  },
  mito: {
    marginTop: "5%",
    textAlign: "center",
    fontSize: 18,
  },
  mitoName: {
    marginTop: "60%",
    textAlign: "center",
    fontSize: 25,
  },
  mitoDescription: {
    width: "85%",
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic"
  },
  rowFlags: {
    flexDirection: "row"
  }
});


export default Page01;