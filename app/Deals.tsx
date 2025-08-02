// app/deals.tsx
import { FlatList, Image, Linking, Pressable, Text, View } from "react-native";
import useDeals from "../hooks/useDeals";

export default function DealsScreen() {
  const { todayDeals } = useDeals();

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>🔥 Today’s Deals</Text>
      <FlatList
        data={todayDeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Image source={{ uri: item.image }} style={{ height: 180, borderRadius: 8 }} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginVertical: 4 }}>{item.name}</Text>
            <Text>
              <Text style={{ color: 'green', fontWeight: 'bold' }}>{item.price}</Text>
              {"  "}
              <Text style={{ textDecorationLine: 'line-through', color: 'grey' }}>{item.originalPrice}</Text>
            </Text>
            <Pressable onPress={() => Linking.openURL(item.link)} style={{ marginTop: 8 }}>
              <Text style={{ color: '#007aff' }}>Buy on {item.platform}</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
