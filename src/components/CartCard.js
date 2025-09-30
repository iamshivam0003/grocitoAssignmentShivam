import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import { useDispatch } from 'react-redux';

import { removeFromCart } from '../redux/slices/cartSlice';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = ele => {
    dispatch(removeFromCart(ele?.id));
  };
  return (
    <View style={styles.cartCardContainer} key={item?.id}>
      <View style={styles.cardItemDetails}>
        <Image source={{ uri: `${item?.image}` }} style={styles.cartCardImg} />
        <View style={styles.cartCardItem}>
          <Text
            style={styles.cartCardTitle}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item?.title}
          </Text>
          <Text
            style={styles.cartCardDisc}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {item?.description}
          </Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }, (_, index) => (
              <MaterialIcons
                key={index}
                name={index < item?.rating?.rate ? 'star' : 'star-outline'}
                size={20}
                color={index < item?.rating?.rate ? 'gold' : 'gray'}
              />
            ))}
            <Text style={styles.count}>({item?.rating?.count})</Text>
          </View>
          <Text style={styles.price}>₹ {item?.price}</Text>
          <Text style={styles.deliveryTxt}>
            Delivery By <Text style={{ color: 'green' }}>Tomorrow</Text>
          </Text>
        </View>
      </View>
      <View style={styles.cartActionContainer}>
        <TouchableOpacity
          style={[
            styles.actionBtn,
            { borderLeftWidth: 2, borderColor: '#e3e2e1' },
          ]}
          onPress={() => {
            handleRemoveFromCart(item);
          }}
        >
          <MaterialIcons
            name="remove-shopping-cart"
            size={20}
            color="#9c9ea1"
          />
          <Text style={styles.actionBtnTxt}>Remove from cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartCardContainer: {
    width: '100%',
    height: 220,
    borderWidth: 5,
    borderColor: '#e3e2e1',
    justifyContent: 'space-between',
  },
  cardItemDetails: {
    flexDirection: 'row',
    padding: 7,
  },
  cartCardImg: {
    height: '100%',
    width: 80,
    resizeMode: 'contain',
  },
  cartCardItem: {
    paddingLeft: 10,
    width: '70%',
  },
  cartCardTitle: {
    fontSize: 23,
    color: '#000',
  },
  cartCardDisc: {
    fontSize: 12,
    marginTop: 4,
    color: '#91918e',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  count: {
    marginLeft: 8,
  },
  price: {
    fontSize: 23,
    color: '#000',
    marginTop: 10,
  },
  deliveryTxt: {
    marginTop: 5,
    color: '#000',
  },
  cartActionContainer: {
    alignItems: 'center',
    height: 40,
    borderTopWidth: 3,
    borderColor: '#e3e2e1',
  },
  actionBtn: {
    flexDirection: 'row',
    padding: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtnTxt: {
    color: '#91918e',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: '800',
  },
});
