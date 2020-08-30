import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

// Personalized custom FontSizes.
export default function FontSize () {
    if(height > 1480) {
        return ({
            text: {
                smallFontSize: 18,
                mediumFontSize: 20,
                largeFontSize: 22
              },
              textSmall: {
                smallFontSize: 12,
                mediumFontSize: 14,
                largeFontSize: 16
              },
              titles: {
                smallFontSize: 22,
                mediumFontSize: 24,
                largeFontSize: 26
              },
              headers: {
                smallFontSize: 30,
                mediumFontSize: 35,
                largeFontSize: 40,
                xlFontSize: 42,
                xxlFontSize: 50
              }
        });
    } else {
        return ({
            text: {
                xsFontSize: 10,
                smallFontSize: 12,
                mediumFontSize: 14,
                mediumLargeFontSize:15,
                largeFontSize: 16
            },
            titles: {
                smallFontSize: 14,
                mediumFontSize: 16,
                largeFontSize: 18
            },
            headers: {
                smallFontSize: 20,
                mediumFontSize: 24,
                largeFontSize: 26,
                xlFontSize: 32,
                xxlFontSize: 35
            }
        });
    } 
}
