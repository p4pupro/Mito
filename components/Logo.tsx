import React from "react";
import { StyleSheet, Image} from "react-native";
import Layout from "../constants/Layout";
import MitoLogoLight from '../assets/images/logo/mito-logo-light.png';
import MitoLogoDark from '../assets/images/logo/mito-logo-dark.png';
import useColorScheme from "../hooks/useColorScheme";

// Use your logos with Apparence 'light' / 'dark'
 const Logo = () => {

    const colorScheme = useColorScheme();

    return (
        <Image 
            source={ colorScheme === 'dark' ? MitoLogoDark : MitoLogoLight } 
            style={styles.image} resizeMode="contain" 
        />
    );
}

export default Logo;

const styles = StyleSheet.create({
  image: {
   width: "80%",
   height: Layout.isLargeDevice ? 300 : Layout.isMediumDevice ? 200 : 150
  }
});