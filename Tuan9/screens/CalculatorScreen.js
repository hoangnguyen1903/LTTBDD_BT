import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const CalculatorScreen = ({ count, dispatch }) => {
  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: '30px', fontWeight: 'bold' }}>CalculatorScreen</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable
          style={{
            borderColor: 'red',
            borderWidth: '1px',
            borderStyle: 'solid',
            paddingHorizontal: '15px',
            paddingVertical: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(increment)}
        >
          <Text style={{ fontWeight: 'bold', fontSize: '24px' }}>+</Text>
        </Pressable>
        <Text style={{ fontWeight: 'bold', fontSize: '24px', marginHorizontal: '15px' }}>
          {count}
        </Text>
        <Pressable
          style={{
            borderColor: 'red',
            borderWidth: '1px',
            borderStyle: 'solid',
            paddingHorizontal: '15px',
            paddingVertical: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(decrement)}
        >
          <Text style={{ fontWeight: 'bold', fontSize: '24px' }}>-</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment);
//     },
//     decrement: () => {
//       dispatch(decrement);
//     },
//   };
// };

export default connect(mapStateToProps)(CalculatorScreen);
