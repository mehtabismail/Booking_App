import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../Constants/navigationStrings';
import {
  Splash,
  SignIn,
  SignUp,
  Front,
  Home,
  AirPortTransfer,
  ApartmentsBooking,
  COVID,
  Flights,
  Guide,
  HotelBooking,
  Tours,
} from '../Screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationStrings.SPLASH}>
        {/* SPLASH SCREEN */}
        <Stack.Screen
          name={navigationStrings.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        {/* FRONT SCREEN */}
        <Stack.Screen
          name={navigationStrings.FRONT}
          component={Front}
          options={{headerShown: false}}
        />
        {/* HOME SCREEN */}
        <Stack.Screen
          name={navigationStrings.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        {/* SIGN-UP SCREEN */}
        <Stack.Screen
          name={navigationStrings.SIGN_UP}
          component={SignUp}
          options={{headerShown: false}}
        />
        {/* SIGN-IN SCREEN */}
        <Stack.Screen
          name={navigationStrings.SIGN_IN}
          component={SignIn}
          options={{headerShown: false}}
        />
        {/* AIRPORT TRANSFER SCREEN */}
        <Stack.Screen
          name={navigationStrings.AIRPORT_TRANSFER}
          component={AirPortTransfer}
          options={{headerShown: false}}
        />
        {/* APARTMENTS BOOKING SCREEN */}
        <Stack.Screen
          name={navigationStrings.APARTMENTS_BOOKING}
          component={ApartmentsBooking}
          options={{headerShown: false}}
        />
        {/* COVID-TEST SCREEN */}
        <Stack.Screen
          name={navigationStrings.COVID}
          component={COVID}
          options={{headerShown: false}}
        />
        {/* FLIGHTS SCREEN */}
        <Stack.Screen
          name={navigationStrings.FLIGHTS}
          component={Flights}
          options={{headerShown: false}}
        />
        {/* GUIDE SCREEN */}
        <Stack.Screen
          name={navigationStrings.GUIDE}
          component={Guide}
          options={{headerShown: false}}
        />
        {/* HOTEL BOOKING SCREEN */}
        <Stack.Screen
          name={navigationStrings.HOTEL_BOOKING}
          component={HotelBooking}
          options={{headerShown: false}}
        />
        {/* TOURS (PACKAGES) SCREEN */}
        <Stack.Screen
          name={navigationStrings.TOURS}
          component={Tours}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
