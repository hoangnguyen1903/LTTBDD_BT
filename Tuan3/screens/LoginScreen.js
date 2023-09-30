import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: '15px',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          marginTop: '30px',
          fontWeight: 'bold',
          fontSize: '35px',
        }}
      >
        Login
      </Text>
      <View style={{ marginTop: '70px' }}>
        <TextInput
          placeholder="Email"
          style={{
            paddingVertical: '15px',
            paddingLeft: '20px',
            fontSize: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </View>
      <View style={{ marginTop: '40px' }}>
        <TextInput
          placeholder="Password"
          style={{
            paddingVertical: '15px',
            paddingLeft: '20px',
            fontSize: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </View>
      <View style={{ marginTop: '60px' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#c34e3b', width: '100%', paddingVertical: '15px' }}
        >
          <Text
            style={{
              color: 'white',
              textTransform: 'uppercase',
              fontSize: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center', marginTop: '20px' }}>
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          color: '#5D25FA',
          fontSize: '14px',
          fontWeight: '600',
          textAlign: 'center',
          marginTop: '15px',
        }}
      >
        For got your password?
      </Text>
      <Text style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center', marginTop: '20px' }}>
        Or login with
      </Text>
      <View style={{ marginTop: '30px', flexDirection: 'row', justifyContent: 'center' }}>
        <View
          style={{
            backgroundColor: '#275a8d',
            flex: 1,
            alignItems: 'center',
            paddingVertical: '15px',
          }}
        >
          <Icon name="facebook-f" color="white" size="20px" />
        </View>
        <View
          style={{
            backgroundColor: '#1593c5',
            flex: 1,
            alignItems: 'center',
            paddingVertical: '15px',
          }}
        >
          <Icon name="twitter" color="white" size="20px" />
        </View>
        <View
          style={{
            backgroundColor: '#c34e3b',
            flex: 1,
            alignItems: 'center',
            paddingVertical: '15px',
          }}
        >
          <Icon name="google" color="white" size="20px" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
