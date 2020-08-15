import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { customDimensions, colorPalette, Strings } from '../utils/index';


const Header_Component = (props) => {
  const { headerText } = props;
  return (
    <>
      <View style={[styles.containerStyle, props.overidingStyles]}>
        <Text style={styles.textStyle}>{headerText}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: customDimensions.window_Width,
    height: customDimensions.header_Height,
    backgroundColor: colorPalette.blue,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: colorPalette.white
  }
});

export default Header_Component;