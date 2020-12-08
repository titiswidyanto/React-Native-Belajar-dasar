import React, {Component} from 'react';
import {Text, View, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abd00'}} />
      <Text>Titis </Text>
      <Text>Widyant </Text>
      <Tis />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Tis = () => <Text>Belajar React </Text>;

const Photo = () => (
  <Image
    source={{uri: 'http://placeimg.com/100/100/tech'}}
    style={{width: 100, height: 100}}
  />
);

class BoxGreen extends Component {
  render() {
    return <Text> ini adalah class </Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>INi Hewan</Text>
        <Text>Mencoba Eslint </Text>
      </View>
    );
  }
}

export default SampleComponent;

// const styles = StyleSheet.create({});
