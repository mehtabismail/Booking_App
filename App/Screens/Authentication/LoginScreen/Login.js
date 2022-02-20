import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image, Button, Input} from 'react-native-elements';
import navigationStrings from '../../../Constants/navigationStrings';
import Colors from '../../../Theme/Colors';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/sea-4768869_1920.jpg')}>
      {/* HEADING CAPTION */}

      <View
        style={{
          height: '25%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color:Colors.primary}}>Travello</Text>
        <Text style={{fontSize: 20, color:Colors.primary}}>Travel with Us!</Text>
      </View>
      {/* INPUT FIELDS */}
      <View>
        <Text style={{fontSize: 14, padding: 10}}>Email</Text>
        <Input
          placeholder="Enter your E-mail"
          value={email}
          inputContainerStyle={{
            borderBottomColor: Colors.primary,
          }}
          style={{
            fontSize: 14,
          }}
          onChangeText={value => setEmail(value)}
        />
        <Text style={{fontSize: 14, padding: 10}}>Password</Text>
        <Input
          placeholder="Enter your Password"
          secureTextEntry={true}
          style={{
            fontSize: 14,
          }}
          inputContainerStyle={{
            borderBottomColor: Colors.primary,
          }}
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity>
          <Text style={{alignSelf: 'flex-end'}}>Forget Password? </Text>
        </TouchableOpacity>
      </View>
      {/* SIGN IN BUTTON */}
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text>Don't have an Account?</Text>
            <TouchableOpacity>
              <Text style={{color: 'red', paddingLeft: 5}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <Button
              title={'Sign In'}
              type="solid"
              buttonStyle={{backgroundColor: Colors.primary}}
              onPress={() => navigation.navigate(navigationStrings.HOME)}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
});
