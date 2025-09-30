import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleOpenProduct = () => {
    navigation.navigate('Product', { product });
  };

  return (
    <TouchableOpacity onPress={handleOpenProduct} style={styles.productBtn}>
      <View style={styles.itemCardContainer} key={product?.id}>
        <Image
          source={{
            uri: `${product?.image}`,
          }}
          style={styles.img}
        />
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {product?.title}
        </Text>
        <Text style={styles.disc} ellipsizeMode="tail" numberOfLines={1}>
          {product?.description}
        </Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <MaterialIcons
              key={index}
              name={index < product?.rating?.rate ? 'star' : 'star-outline'}
              size={20}
              color={index < product?.rating?.rate ? 'gold' : 'gray'}
            />
          ))}

          <Text style={styles.count}>({product?.rating?.count})</Text>
        </View>
        <Text style={styles.price}>₹ {product?.price}</Text>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => {
            handleAddToCart(product);
          }}
        >
          <Text style={styles.cartBtnTxt}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productBtn: {
    width: '50%',
    height: 430,
  },
  itemCardContainer: {
    backgroundColor: '#fff',
    borderColor: '#e3e2e1',
    borderWidth: 5,
    borderRadius: 10,
    padding: 8,
  },
  img: {
    height: '50%',
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 23,
    marginTop: 8,
    color: '#000',
  },
  disc: {
    fontSize: 12,
    marginTop: 5,
    color: '#91918e',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  count: {
    marginLeft: 5,
  },
  price: {
    fontSize: 23,
    color: '#000',
    marginTop: 5,
  },
  addToCartBtn: {
    marginTop: 30,
    height: 40,
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#127837',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  cartBtnTxt: {
    fontSize: 19,
  },
});
