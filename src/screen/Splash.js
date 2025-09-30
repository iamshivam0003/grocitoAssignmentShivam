import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
const dimensionHeight = Dimensions.get('window').height;
const dimensionWidth = Dimensions.get('window').width;
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'BottomNavigator' }],
        }),
      );
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);
  return (
    <View style={styles.splashContainer}>
      <View style={styles.splashContent}>
        <Image
          source={require('../assets/grocitoSplashLogo.png')}
          style={styles.splashImg}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#89b4daff',
  },
  splashContent: {
    padding: 1,
  },
  splashImg: {
    height: dimensionHeight * 0.25,
    width: dimensionWidth * 0.95,
    resizeMode: 'contain',
  },
});
