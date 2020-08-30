import * as React from 'react';
import { 
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput, 
  SafeAreaView as DefaultSafeAreaView,
  ActivityIndicator as DefaultActivityIndicator 
} from 'react-native';
import { FontAwesome5 as DefaultFontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.app.light & keyof typeof Colors.app.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors.app[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type FontAwesome5Props = ThemeProps & typeof DefaultFontAwesome5['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];
export type ActivityIndicatorProps = ThemeProps & DefaultActivityIndicator['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'textInputBorderColor');

  return <DefaultTextInput style={[{ borderColor }, style]} {...otherProps}/>
}

export function FontAwesome5(props: FontAwesome5Props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'iconColor');

  return <DefaultFontAwesome5 style={[{ color }, style]} {...otherProps}/>
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ActivityIndicator(props: ActivityIndicatorProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultActivityIndicator style={[{ backgroundColor }, style]} {...otherProps} />;
}