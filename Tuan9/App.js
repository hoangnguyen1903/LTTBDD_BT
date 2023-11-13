import { Provider } from 'react-redux';
import CalculatorScreen from './screens/CalculatorScreen';
import store from './redux/store';


export default function App() {
    return ( 
    <Provider store={store}>
      <CalculatorScreen />
    </Provider>
    );
}