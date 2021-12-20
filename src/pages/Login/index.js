import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {ILLogo} from '../../assets/illustration';
import {Input, Link, Button, Gap} from '../../components';

const Login = () => {
  return (
    <View style={styles.page}>
      {/* <ILLogo /> */}
      <Text style={styles.title}>Masuk dan Mulai Berkonsultasi!</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
