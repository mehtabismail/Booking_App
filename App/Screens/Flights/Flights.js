import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Image, Input} from 'react-native-elements';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import metrics from '../../Theme/metrics';
import navigationStrings from '../../Constants/navigationStrings';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Flights = ({navigation}) => {
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
      <View style={{padding: metrics.basePadding}}>
        <Text
          style={{
            color: Colors.primary,
            fontSize: Fonts.size.heading,
            fontWeight: 'bold',
          }}>
          Find your next stay
        </Text>
        <Text style={{fontSize: Fonts.size.medium}}>
          Search for Flights, Departure/Arrival and more...
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          alignSelf: 'center',
          marginTop: metrics.baseMargin,
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
              checkIn == '' ? 'Departure' : checkIn.toString().substring(0, 10)
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
              checkOut == '' ? 'Arrival' : checkOut.toString().substring(0, 10)
            }
            editable={false}
          />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        <Button
          title={'Search Flight'}
          type="solid"
          buttonStyle={{backgroundColor: Colors.primary}}
          onPress={() =>
            navigation.navigate(navigationStrings.APARTMENTS_BOOKING)
          }
        />
      </View>
    </View>
  );
};

export default Flights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
