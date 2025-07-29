import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error setting data:', e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting data:', e);
  }
};

export const addToCart = async (product: any) => {
  const existing = (await getData('cart')) || [];
  const updated = [...existing, product];
  await setData('cart', updated);
};

export const removeFromCart = async (productId: string) => {
  const existing = (await getData('cart')) || [];
  const filtered = existing.filter((item: any) => item.id !== productId);
  await setData('cart', filtered);
};

export const toggleWishlist = async (product: any) => {
  const existing = (await getData('wishlist')) || [];
  const exists = existing.find((item: any) => item.id === product.id);

  let updated;
  if (exists) {
    updated = existing.filter((item: any) => item.id !== product.id);
  } else {
    updated = [...existing, product];
  }

  await setData('wishlist', updated);
};

export const isInWishlist = async (productId: string) => {
  const wishlist = (await getData('wishlist')) || [];
  return wishlist.some((item: any) => item.id === productId);
};
