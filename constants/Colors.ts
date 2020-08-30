
import { colorApp } from "react-native-dotenv";
import { ColorMito } from "../constants/colors/index";

// You can import your custom colors and then...
// Use inside of const Colors.
export const Colors = {
  app: colorApp === 'mito' ? 
    ColorMito 
    : 
    ColorMito
}



