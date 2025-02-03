import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {buttonStyles} from '../../styles/buttonStyles';
import { useNavigation } from '@react-navigation/native';


const SkipButton = ({navigationScreen,buttonText}) => {
  const navigation = useNavigation();
  const onClickSkip = () => {
    navigation.navigate(`${navigationScreen}`);
  };
  return (
    <>
        <Pressable onPress={onClickSkip}><Text style={buttonStyles.SkipButton}>{buttonText}</Text></Pressable>
    </>
  );
};

export default SkipButton;
