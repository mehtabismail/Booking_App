import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import navigationStrings from '../../Constants/navigationStrings';
import {Image} from 'react-native-elements';


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(navigationStrings.FRONT);
    }, 1000);
  }, []);

  // const getLoggedInDetails = async () => {
  //   setIsLogin((isLogin = await AsyncStorage.getItem('isLogin')));
  //   if (isLogin == 'true') {
  //     navigation.replace(navigationStrings.BOTTOM_TABS);
  //   }else{
  //       navigation.replace(navigationStrings.FRONT);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/splash.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Let's</Text>
        <Text style={styles.textStyle}>Start your Vacation!</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#088f88',
  },
  imageStyle: {height: 100, width: 100, tintColor: 'white'},
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 25,
    padding: 5,
    alignItems: 'center',
  },
});
