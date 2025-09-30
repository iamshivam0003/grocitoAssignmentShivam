import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const { width } = Dimensions.get('window');

const Product = ({ route, navigation }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Product added to the Cart.')
  };

  useEffect(() => {
    navigation.setOptions({
      title: `${product.title}`,
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>

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

        <Text style={styles.price}>₹ {product.price}</Text>

        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: width,
    height: width * 1.2,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  count: {
    marginLeft: 8,
  },
  price: {
    fontSize: 22,
    color: '#0F6CBD',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartButton: {
    backgroundColor: '#FFA41C',
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
