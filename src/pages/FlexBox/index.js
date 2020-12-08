import React, {useEffect, useState} from 'react'; //{Component}
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//     this.state = {
//       subscriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('==> didmount');

//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 4000);
//   }

//   componentDidUpdate() {
//     console.log('==> update');
//   }

//   componentWillUnmount() {
//     console.log('==> unmount');
//   }

//   render() {
//     console.log('==> renderrrrrrr');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#bdc3c7',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#8e44ad', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           {/* <ScrollView> */}
//           <Text> Beranda </Text>
//           <Text> Video </Text>
//           <Text> Playlist </Text>
//           <Text> Komunitas </Text>
//           <Text> Channel </Text>
//           <Text> Tentang </Text>
//           {/* </ScrollView> */}
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             marginTop: 20,
//             marginLeft: 10,
//           }}>
//           <Image
//             source={{
//               uri:
//                 'https://instagram.fsrg1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83029961_785839068585341_2292998720536444928_n.jpg?_nc_ht=instagram.fsrg1-1.fna.fbcdn.net&_nc_ohc=YX61d09ld1gAX_8yAJR&tp=1&oh=55022434db1664bf72a0ee8fcf2d088f&oe=5FE7823D',
//             }}
//             style={{width: 100, height: 100, borderRadius: 100 / 2}}
//           />
//           <View
//             style={{
//               flexDirection: 'column',
//               justifyContent: 'center',
//               marginLeft: 14,
//             }}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Titis Widyanto
//             </Text>
//             <Text> {this.state.subscriber} ribu Subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('did uupdate');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#bdc3c7',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
        <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
        <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
        <View style={{backgroundColor: '#8e44ad', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* <ScrollView> */}
        <Text> Beranda </Text>
        <Text> Video </Text>
        <Text> Playlist </Text>
        <Text> Komunitas </Text>
        <Text> Channel </Text>
        <Text> Tentang </Text>
        {/* </ScrollView> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 10,
        }}>
        <Image
          source={{
            uri:
              'https://instagram.fsrg1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83029961_785839068585341_2292998720536444928_n.jpg?_nc_ht=instagram.fsrg1-1.fna.fbcdn.net&_nc_ohc=YX61d09ld1gAX_8yAJR&tp=1&oh=55022434db1664bf72a0ee8fcf2d088f&oe=5FE7823D',
          }}
          style={{width: 100, height: 100, borderRadius: 100 / 2}}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 14,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Titis Widyanto</Text>
          <Text> {subscriber} ribu Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;

// const styles = StyleSheet.create({});
