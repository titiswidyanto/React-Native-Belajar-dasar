import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CallAPIVanilla = () => {
  useEffect(() => {
    //call api deng get
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    //call api deng pos
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    console.log('data object ', dataForAPI);
    console.log('data stringify ', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('hasil', json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>Belajar Call API</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTittle: {textAlign: 'center'},
});
