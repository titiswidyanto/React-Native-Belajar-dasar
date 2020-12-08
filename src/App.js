import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';

// import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Position from './pages/position';
import Communication from './pages/Communication';
import ReactNativeSVG from './pages/ReactNativeSVG';
import CallAPIVanilla from './pages/CallAPIVanilla';

const App = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* {isShow && <FlexBox />} */}
        {/* {<FlexBox />} */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSVG /> */}
        <CallAPIVanilla />
        <Text> misalkan Bisa beralih ke laptop baru oke </Text>
      </ScrollView>
    </View>
  );
};

export default App;
