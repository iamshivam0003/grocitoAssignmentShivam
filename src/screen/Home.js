import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  searchProductByName,
} from '../redux/slices/productsSlice';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

const Home = () => {
  const [searchTxt, setSearchTxt] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { productList, searchProductList, loading, error } = useSelector(
    state => state.product,
  );

  const searchItems = txt => {
    setSearchTxt(txt);
    dispatch(searchProductByName(txt));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <View style={styles.container}>
      
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={20} color={'gray'} />
        <TextInput
          placeholder="Search products"
          value={searchTxt}
          onChangeText={searchItems}
          style={styles.input}
        />
      </View>
    {loading && <ActivityIndicator size={100} color={'red'} style={{marginTop:'50%'}}/>}
      {searchProductList.length === 0 && !loading && !error ? (
        <Text style={styles.noResults}>No items found</Text>
      ) : error && !loading ? (
        <Text style={styles.noResults}>Error while fetching data</Text>
      ) : (
        <FlatList
          data={searchProductList}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  noResults: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#a29898ff',
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
