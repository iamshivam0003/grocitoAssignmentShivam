import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
const EmptyCartCard = () => {
  const navigation = useNavigation();

  const handleContinueShop = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.emptyCardContainer}>
      <MaterialIcons name="add-shopping-cart" color="#9c9ea1" size={200} />
      <Text style={styles.emptyCartTxt}>Your Cart Is Empty !</Text>
      <TouchableOpacity
        style={styles.emptyCartBtn}
        onPress={handleContinueShop}
      >
        <Text style={styles.emptyCartBtnTxt}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCartCard;

const styles = StyleSheet.create({
  emptyCardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  emptyCartTxt: {
    color: '#000',
    fontSize: 25,
    fontWeight: '800',
  },
  emptyCartBtn: {
    padding: 5,
    marginTop: 10,
    height: 50,
    width: 180,
    backgroundColor: '#3870c9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartBtnTxt: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },
});
