/* eslint-disable prettier/prettier */
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILGetStarted } from '../../assets';
import { Button, Gap } from '../../components';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Button title="Get Started" />
        <Gap height={16}/>
        <Button title="Sign In"  type="secondary"/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding:40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex:1,
  },
  title: {
    fontSize: 28,
    marginTop:91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
});
