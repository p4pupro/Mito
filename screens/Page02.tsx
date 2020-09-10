import * as React from 'react';
import { StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useTranslation } from 'react-i18next';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export const Page02 = () => {

  const { t } = useTranslation();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
       <Text style={[styles.title, { color: Colors.app[colorScheme].iconColor }]}>
            { t("MITO_NAME") }
          </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
