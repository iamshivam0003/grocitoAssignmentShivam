import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const CartIconCount = ({ focused }) => {
  const cartCount = useSelector(state => {
    return state?.cart;
  });
  return (
    <View style={styles.cartIconContainer}>
      <MaterialIcons
        name={focused ? 'shopping-cart' : 'shopping-cart-checkout'}
        size={35}
        color={focused ? '#4a78c2' : '#414142'}
      />

      {cartCount?.length > 0 ? (
        <View style={styles.cartIconView}>
          <Text style={styles.count}>{cartCount?.length}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CartIconCount;

const styles = StyleSheet.create({
  cartIconView: {
    position: 'relative',
  },
  cartIconView: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#f0190a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000',
  },
});
