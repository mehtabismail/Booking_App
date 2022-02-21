import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Image, Input} from 'react-native-elements';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import metrics from '../../Theme/metrics';
import navigationStrings from '../../Constants/navigationStrings';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const COVID = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [checkIn, setCheckIn] = useState('');
  var [checkOut, setCheckOut] = useState('');
  var [mode, setMode] = useState('date');

  const selectDate = () => {
    showDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // checkIn = date;

    mode == 'date'
      ? setCheckIn((checkIn = date.toString().substring(0, 15)))
      : setCheckOut((checkOut = date.toString().substring(0, 15)));

    setMode((mode = ''));
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        locale="en_GB" // Use "en_GB" here
        // date={new Date()}
        timePickerModeAndroid=""
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View>
        <View
          style={{
            paddingHorizontal: metrics.basePadding,
            paddingTop: metrics.basePadding,
          }}>
          <Text style={{fontSize: Fonts.size.h6, fontWeight: 'bold'}}>
            Flight Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
            marginTop: metrics.smallMargin,
          }}>
          <TouchableOpacity style={{width: '50%'}}>
            <Input
              leftIcon={
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: metrics.smallPadding,
                    width: 30,
                    height: 30,
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/Icons/plane.png')}
                />
              }
              placeholder={'From?'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%'}}>
            <Input
              leftIcon={
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: metrics.smallPadding,
                    width: 30,
                    height: 30,
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/Icons/plane.png')}
                />
              }
              placeholder={'To?'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setMode((mode = 'date'));
              selectDate();
            }}
            style={{width: '50%'}}>
            <Input
              leftIcon={
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: metrics.smallPadding,
                    width: 30,
                    height: 30,
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/Icons/calender.png')}
                />
              }
              placeholder={
                checkIn == ''
                  ? 'Departure'
                  : checkIn.toString().substring(0, 10)
              }
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMode((mode = 'date2'));
              selectDate();
            }}
            style={{width: '50%'}}>
            <Input
              leftIcon={
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: metrics.smallPadding,
                    width: 30,
                    height: 30,
                    tintColor: Colors.primary,
                  }}
                  source={require('../../assets/Icons/calender.png')}
                />
              }
              placeholder={
                checkOut == ''
                  ? 'Arrival'
                  : checkOut.toString().substring(0, 10)
              }
              editable={false}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            paddingHorizontal: metrics.basePadding,
            paddingTop: metrics.smallPadding,
          }}>
          <Text style={{fontSize: Fonts.size.h6, fontWeight: 'bold'}}>
            Passport Details
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{width: '65%', alignSelf: 'center'}}>
            <Input placeholder="Enter Name" />
          </View>
          <View style={{width: '30%', alignSelf: 'center'}}>
            <Input placeholder="DOB" />
          </View>
        </View>
        <View style={{width: '95%', alignSelf: 'center'}}>
          <Input placeholder="Enter Passport No." />
        </View>
      </View>
      <View>
        <View
          style={{
            paddingHorizontal: metrics.basePadding,
            paddingTop: metrics.smallPadding,
          }}>
          <Text style={{fontSize: Fonts.size.h6, fontWeight: 'bold'}}>
            COVID Test (required)
          </Text>
        </View>
        <View>
          <Input placeholder="Enter no. of users" />
        </View>
      </View>
      <View
        style={{padding: 20, position: 'absolute', bottom: 0, width: '100%'}}>
        <Button
          title={'Sign In'}
          type="solid"
          buttonStyle={{backgroundColor: Colors.primary}}
          onPress={() => navigation.navigate(navigationStrings.HOME)}
        />
      </View>
    </View>
  );
};

export default COVID;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
