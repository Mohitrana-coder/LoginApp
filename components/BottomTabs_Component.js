import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { customDimensions, colorPalette, Strings } from '../utils/index';


const BottomTabs_Component = (props) => {
  const { overidingStyles } = props;
  return (
    <>
      <View style={[styles.containerStyle, overidingStyles]}>
        <TouchableOpacity style={styles.touchableStyle}>
          <Text style={styles.textStyle} >{Strings.tabScreenName.home}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: customDimensions.window_Width,
    height: customDimensions.header_Height,
    backgroundColor: colorPalette.backGroundColor,
    flexDirection: "row",
    marginTop: 'auto',
  },
  touchableStyle: {
    width: customDimensions.window_Width, height: "100%", justifyContent: "center", alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: colorPalette.blue
  }
});

export default BottomTabs_Component;