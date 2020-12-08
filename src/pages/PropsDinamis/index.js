import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}> {props.judul} </Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi komponen dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="youtube channel"
            gambar="https://placeimg.com/50/50/animals"
          />
          <Story judul="instagram" gambar="https://placeimg.com/50/50/arch" />
          <Story judul="kodingan" gambar="https://placeimg.com/50/50/nature" />
          <Story judul="react" gambar="https://placeimg.com/50/50/people" />
          <Story judul="native" gambar="https://placeimg.com/50/50/tech" />
          <Story
            judul="update"
            gambar="https://placeimg.com/50/50/tech/grayscale"
          />
          <Story
            judul="setiaphari"
            gambar="https://placeimg.com/50/50/tech/sepia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
