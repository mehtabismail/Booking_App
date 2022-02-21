import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Card, Icon, Image, Input} from 'react-native-elements';
import navigationStrings from '../../Constants/navigationStrings';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';
import metrics from '../../Theme/metrics';

const Home = ({navigation}) => {
  var [searchItem, setSearchItem] = useState('');
  var [name, setName] = useState('Robert');
  var [data, setData] = useState(null);

  const LIST = [
    {
      title: 'Trend',
      key: 1,
      data: [
        {
          Area: 'Gilgit Baltistan',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Kashmir',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Sakardo',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
      ],
    },
    {
      title: 'Featured',
      key: 2,
      data: [
        {
          Area: 'Siachin',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Biafo',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Boltoro',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
      ],
    },
    {
      title: 'Most Visited',
      key: 3,
      data: [
        {
          Area: 'Tarbela',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Mangla',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
        {
          Area: 'Basha',
          Country: 'Pakistan',
          imageSource: '../../assets/sea-4768869_1920.jpg',
        },
      ],
    },
  ];

  const renderSubList = item => {
    // let length = item.data.length;
    // for (let index = 0; index < length; index++) {
    //   console.log("loop running : ");
    //   console.log(item.data[index]);

    // }
    setData((data = item.data[0]));
    console.log(data);
  };
  return (
    <View style={styles.container}>
      {/* PROFILE TEXT & AVATAR */}
      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.profileText}>Hi,</Text>
          <Text
            style={[
              styles.profileText,
              {fontWeight: 'bold'},
            ]}>{` ${name}`}</Text>
        </View>
        <Avatar
          size={'medium'}
          rounded
          source={require('../../assets/travelling.jpg')}
        />
      </View>
      <View style={styles.captionContainer}>
        <Text style={styles.captainText}>Let's Start</Text>
        <Text style={styles.captainText}>your vacation!</Text>
      </View>
      {/* SEARCH CONTAINER & FILTER */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={styles.searchInput}>
          <View>
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
                width: 180,
                marginLeft: 5,
              }}
            />
          </View>
        </View>
        <View style={styles.filter}>
          <Image
            style={styles.filterIcon}
            source={require('../../assets/Icons/filter.png')}
          />
        </View>
      </View>
      {/* BOOKING CARDS */}
      <View
        style={{
          paddingHorizontal: metrics.basePadding,
          paddingTop: metrics.doubleBasePadding,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.FLIGHTS)}>
          <View style={styles.card}>
            <Image
              style={styles.listIcons}
              source={require('../../assets/Icons/flight.png')}
            />
          </View>
          <View style={styles.listIconsStyle}>
            <Text>Flight</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.HOTEL_BOOKING)}>
          <View style={styles.card}>
            <Image
              style={styles.listIcons}
              source={require('../../assets/Icons/hotel.png')}
            />
          </View>
          <View style={styles.listIconsStyle}>
            <Text>Hotel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.TOURS)}>
          <View style={styles.card}>
            <Image
              style={styles.listIcons}
              source={require('../../assets/Icons/place.png')}
            />
          </View>
          <View style={styles.listIconsStyle}>
            <Text>Tours</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.COVID)}>
          <View style={styles.card}>
            <Image
              style={styles.listIcons}
              source={require('../../assets/Icons/covid.png')}
            />
          </View>
          <View style={styles.listIconsStyle}>
            <Text>COVID</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'green'}}></View>

      <View>
        <FlatList
          data={LIST}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    renderSubList(item.item);
                  }}
                  style={{
                    paddingHorizontal: metrics.doubleBasePadding,
                    paddingTop: metrics.doubleBasePadding,
                  }}>
                  <Text style={{fontSize: Fonts.size.h5, fontWeight: 'bold'}}>
                    {item.item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: metrics.basePadding,
    paddingHorizontal: metrics.regularPadding,
    paddingTop: metrics.basePadding,
  },
  profileText: {
    fontSize: Fonts.size.regular,
  },
  captionContainer: {
    paddingHorizontal: metrics.basePadding,
    paddingBottom: metrics.basePadding,
  },
  captainText: {
    color: Colors.primary,
    fontSize: Fonts.size.heading,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '65%',
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
  filter: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    width: '20%',
    justifyContent: 'center',
    marginLeft: '5%',
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
    width: 32,
    height: 32,
  },
  filterIcon: {
    width: 32,
    height: 32,
    tintColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
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
  listIcons: {
    tintColor: Colors.primary,
    width: 32,
    height: 32,
  },
  listIconsStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.smallPadding,
  },
});
