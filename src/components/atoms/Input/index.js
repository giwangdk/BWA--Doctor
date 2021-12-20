import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
// import {ILLogo} from '../../assets/illustration';

const Input = ({label}) => {
  return (
    <View>
      {/* <ILLogo /> */}
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: '37D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
