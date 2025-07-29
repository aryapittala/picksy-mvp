import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any = 'home';

          if (route.name === 'index') iconName = 'home';
          if (route.name === 'cart') iconName = 'cart';
          if (route.name === 'wishlist') iconName = 'heart';
          if (route.name === 'profile') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#00bfa5',
        tabBarInactiveTintColor: 'gray',
      })}
    />
  );
}
