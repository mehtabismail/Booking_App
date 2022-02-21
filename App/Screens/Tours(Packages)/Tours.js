import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Theme/Colors';
import {Image} from 'react-native-elements';
import metrics from '../../Theme/metrics';
import Fonts from '../../Theme/Fonts';

const Tours = () => {
  var [places, setPlaces] = useState(true);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: metrics.regularPadding,
          paddingTop: metrics.doubleBasePadding,
        }}>
        <Text
          style={{
            fontSize: Fonts.size.heading,
            fontWeight: 'bold',
            color: Colors.primary,
            paddingLeft: metrics.regularPadding,
          }}>
          Pick Your Travel Destination
        </Text>
      </View>
      <View style={{padding: metrics.basePadding}}>
        <View style={styles.searchInput}>
          <View style={{paddingLeft: metrics.smallPadding}}>
            <Image
              style={styles.searchIcon}
              source={require('../../assets/Icons/search.png')}
            />
          </View>
          <View>
            <TextInput
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 250,
                marginLeft: 5,
              }}
              placeholder="Where do you want to go?"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: metrics.basePadding,
        }}>
        <TouchableOpacity
          onPress={() => {
            setPlaces((places = true));
          }}
          style={styles.placesAndPackagesContainer}>
          <Text style={{fontSize: Fonts.size.h5}}>Places</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPlaces((places = false));
          }}
          style={styles.placesAndPackagesContainer}>
          <Text style={{fontSize: Fonts.size.h5}}>Packages</Text>
        </TouchableOpacity>
      </View>
      {places == true ? (
        <View style={{padding: metrics.basePadding}}>
          <Text style={{fontSize: Fonts.size.h6}}>
            Popular places are given bellow :
          </Text>
        </View>
      ) : (
        <View style={{padding: metrics.basePadding}}>
          <Text style={{fontSize: Fonts.size.h6}}>
            Popular packages are given bellow :
          </Text>
        </View>
      )}
    </View>
  );
};

export default Tours;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchInput: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginLeft: 5,
    tintColor: Colors.primary,
    width: 30,
    height: 30,
  },
  placesAndPackagesContainer: {
    paddingBottom: metrics.smallPadding,
    borderBottomColor: Colors.primary,
    borderColor: 'transparent',
    borderWidth: 2,
    width: '40%',
    alignItems: 'center',
  },
});
