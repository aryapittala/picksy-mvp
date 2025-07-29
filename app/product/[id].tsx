'use client';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { products } from '../../constants/data';
import { addToCart, getData, toggleWishlist } from '../../utils/storage';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const found = products.find((p: any) => p.id === String(id));
    setProduct(found);
    if (found?.id) {
  checkWishlist(found.id);
}

  }, [id]);

  const checkWishlist = async (productId: string) => {
    const wishlist = (await getData('wishlist')) || [];
    const exists = wishlist.find((item: any) => item.id === productId);
    setWishlisted(!!exists);
  };

  const handleAddToCart = async () => {
    if (!product) return;
    await addToCart(product);
    alert('Added to cart!');
  };

  const handleWishlistToggle = async () => {
    if (!product) return;
    await toggleWishlist(product);
    checkWishlist(product.id);
  };

  if (!product) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.name}>{product.name}</Text>
        <TouchableOpacity onPress={handleWishlistToggle}>
          <Ionicons
            name={wishlisted ? 'heart' : 'heart-outline'}
            size={26}
            color={wishlisted ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <View style={styles.btn}>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  price: { fontSize: 18, color: '#00bfa5', marginBottom: 12 },
  desc: { fontSize: 16, lineHeight: 22, color: '#333' },
  btn: { marginTop: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
