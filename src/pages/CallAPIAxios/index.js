import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
      .then((result) => {
        //   console.log('result ', result)
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err', err));
  };

  const posData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        setDataJob(result.data);
      })
      .catch((err) => console.log('error', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>Belajar axios</Text>
      <Button title="GET Data" onPress={getData} />
      <Text> Respon Get Data </Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{dataUser.first_name}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST Data" onPress={posData} />
      <Text> Respon POST Data </Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTittle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});
