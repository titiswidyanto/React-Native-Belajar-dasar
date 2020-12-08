import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import avaa from '../../assets/icons/cart.png';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        // sourc={{
        //   uri: 'http://placeimg.com/100/100/people',
        // }}
        source={avaa}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descNama}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>Belajar databse json</Text>
      <Text>masukkan nama anggota</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <Button title="Simpan" />
      <View style={styles.line} />
      <Item />
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTittle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descNama: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {color: 'red', fontSize: 20, fontWeight: 'bold'},
});
