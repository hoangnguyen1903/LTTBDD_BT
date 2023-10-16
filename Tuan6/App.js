import ProductScreen from './screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import USBScreen from './screens/USBScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return ( 
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='USB' >
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="USB" component={USBScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}