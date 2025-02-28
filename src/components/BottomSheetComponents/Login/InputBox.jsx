import React from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';


const InputBox = () => {
 const moveScreen=()=>{

 }
  return (
    <View style={VerifyPhoneStyle.verifyContainer}>
    <TextInput
    style={VerifyPhoneStyle.input}
    keyboardType='numeric'
    placeholder='Verify your Phone Number *'
    placeholderTextColor="#FFFFFF96"
    />
    <Pressable onPress={moveScreen} style={VerifyPhoneStyle.moveNext}>
    <Image source={require('../../../assets/icons/Right.png')} />
      </Pressable>
    </View>
  );
};

export default InputBox;
