import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import IconBackDark from '../../../assets/icon/ic-back-dark.svg';
import {Gap} from '../../../components';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <IconBackDark /> */}
      <Text style={styles.text}>Text Header</Text>
      <Gap width={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
  },
});
export default Header;
