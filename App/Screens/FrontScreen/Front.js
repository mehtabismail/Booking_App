import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import navigationStrings from '../../Constants/navigationStrings';
import Colors from '../../Theme/Colors';

const Front = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/sea-4768869_1920.jpg')}>
      <View style={styles.imageContainer}>
        <Avatar
          size={200}
          rounded
          source={require('../../assets/travelling.jpg')}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Picking Your Travel Destination
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'Sign In'}
          type="solid"
          buttonStyle={{backgroundColor: Colors.primary}}
          onPress={() => navigation.navigate(navigationStrings.SIGN_IN)}
        />
      </View>
      <View style={styles.registerTextStyle}>
        <Text>Haven't registered yet?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Front;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    height: '45%',
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 20,
    marginTop: 30,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  registerTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
});
