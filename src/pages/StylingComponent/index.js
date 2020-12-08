import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}> Styling Rajin... </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abd',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 50,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abd',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 10,
          marginLeft: 10,
        }}
      />

      <View
        style={{
          width: 212,
          height: 260,
          backgroundColor: '#F2F2F2',
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
          marginLeft: 10,
          marginTop: 10,
        }}>
        <Image
          source={macbook}
          style={{
            width: 188,
            height: 107,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f39c12',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#00B894',
            borderRadius: 25,
            paddingVertical: 6,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 14,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StylingComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#156a',
    marginTop: 10,
    marginLeft: 10,
  },
});
