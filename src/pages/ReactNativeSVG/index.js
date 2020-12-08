import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IlustrationMyApp from '../../assets/image/undraw_Yacht_re_kkai.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>Belajar react SVG</Text>
      <IlustrationMyApp width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTittle: {textAlign: 'center'},
});
