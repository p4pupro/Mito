import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { View, Text, ActivityIndicator } from '../components/Themed';
import { translate } from '../constants/Locale';
import { useState } from 'react';
import { PickerIOS } from '../components/PickerIOS';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useRecoilState } from 'recoil';
import { data, dataPicker } from '../api/pageOne';
import Tooltips  from '../components/Tooltips';


const Page01 = () =>  {

  const [ isLoading, setIsLoading ] = useState(false);
  const colorScheme = useColorScheme();
  const [ picker, setPicker ] = useRecoilState(dataPicker);

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
        <Text style={styles.mito}>
                { translate("MITO") }
            </Text>
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
                 headerTitleMessage={ translate("TITLE_TOOLTIPS") }
                 message={ translate("MESSAGE_TOOLTIPS") }
              />
              <Text style={styles.I18N}>
                { translate("I18N_LOCALIZATION") }
              </Text>
          </View>
          <View style={styles.rightHeaderColunm}>
            <Text style={styles.textPicker}>
              { translate("PICKER_MESSAGE") }
            </Text>
            <Text style={styles.textTooltip}>
              { translate("TOOLTIP_MESSAGE") }
            </Text>
            <Text style={styles.textI18n}>
              { translate("I18N_MESSAGE") }
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
  pickerContainer: {
    borderRadius: 20,
    height: 50, 
    width: 140,
  },
  picker: {
    color: 'black', 
    backgroundColor: 'white',
  },
  leftHeaderColunm: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightHeaderColunm: {
    flexDirection: "column",
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
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
    marginTop: "25%",
    textAlign: "center",
    fontSize: 18,
  }
});


export default Page01;