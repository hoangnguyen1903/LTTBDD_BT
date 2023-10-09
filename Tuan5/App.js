import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductScreen from './screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return ( 
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}