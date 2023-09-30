import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen = () => {
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
        Register
      </Text>
      <View style={{ marginTop: '30px' }}>
        <TextInput
          placeholder="Name"
          style={{
            paddingVertical: '15px',
            paddingLeft: '20px',
            fontSize: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </View>
      <View style={{ marginTop: '20px' }}>
        <TextInput
          placeholder="Phone"
          style={{
            paddingVertical: '15px',
            paddingLeft: '20px',
            fontSize: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </View>
      <View style={{ marginTop: '20px' }}>
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
      <View style={{ marginTop: '20px' }}>
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
      <View style={{ marginTop: '20px' }}>
        <TextInput
          placeholder="Birthday"
          style={{
            paddingVertical: '15px',
            paddingLeft: '20px',
            fontSize: '18px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="second" status="unchecked" color="#000" />
          <Text style={{ fontSize: '18px' }}>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="second" status="unchecked" color="#000" />
          <Text style={{ fontSize: '18px' }}>Female</Text>
        </View>
      </View>
      <View style={{ marginTop: '20px' }}>
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
            Register
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: '14px', fontWeight: '600', textAlign: 'center', marginTop: '20px' }}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

export default RegisterScreen;
