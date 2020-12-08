import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={styles.productName}>New Macbook Pro 2019</Text>
        <Text style={styles.productPrice}>Rp. 25.000.000</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#156a',
    marginTop: 10,
    marginLeft: 10,
  },
  wrapper: {
    width: 212,
    height: 260,
    backgroundColor: '#F2F2F2',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginLeft: 10,
    marginTop: 10,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f39c12',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
  },
  buttonWrapper: {
    backgroundColor: '#00B894',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
