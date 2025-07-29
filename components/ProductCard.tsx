import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  isFavorite: boolean;
}

interface Props {
  product: Product;
  onPress: () => void;
  onToggleWishlist: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onPress, onToggleWishlist }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{product.name}</Text>
      <Text style={styles.cardPrice}>{product.price}</Text>
      <TouchableOpacity onPress={onToggleWishlist} style={styles.wishlistIcon}>
        <Ionicons
          name={product.isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={product.isFavorite ? 'red' : 'gray'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  wishlistIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ProductCard;
