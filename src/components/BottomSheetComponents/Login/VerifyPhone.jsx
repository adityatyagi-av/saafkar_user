import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';

import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import {TextInput} from 'react-native-gesture-handler';
import {OtpScreenStyles} from '../../../styles/OtpScreenStyles';
import {OtpInput} from 'react-native-otp-entry';

const VerifyPhone = () => {
  const [phone, setPhone] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const onTextChange = text => {
    console.log(text.length);
    if (text.length > 10) {
      return;
    } else {
      setPhone(text);
    }
  };
  const moveScreen = () => {
    setIsOtpSent(true);
  };
  return (
    <>
      <View style={VerifyPhoneStyle.verifyContainer}>
        <TextInput
          style={VerifyPhoneStyle.input}
          keyboardType="numeric"
          placeholder="Verify your Phone Number *"
          placeholderTextColor="#FFFFFF96"
          value={phone}
          onChangeText={text => {
            onTextChange(text);
          }}
          readOnly={isOtpSent}
        />
        <Pressable
          onPress={moveScreen}
          style={
            isOtpSent
              ? VerifyPhoneStyle.moveNextSent
              : VerifyPhoneStyle.moveNext
          }
          disabled={isOtpSent}>
          <Image source={require('../../../assets/icons/Right.png')} />
        </Pressable>
      </View>
      <View style={VerifyPhoneStyle.bar} />
      <View style={VerifyPhoneStyle.ContentBox}>
        <Text style={VerifyPhoneStyle.ContentText}>
          {isOtpSent
            ? 'We have sent a Verification code to '
            : ' Enter your valid phone no'}
        </Text>
        <Text style={VerifyPhoneStyle.ContentText}>
          {isOtpSent ? ' +91-XXXXXXXXXXX' : 'to verify it .'}
        </Text>
      </View>
      {isOtpSent && (
        <View style={VerifyPhoneStyle.Otp}>
          <OtpInput
            numberOfDigits={6}
            focusColor="#ffffff"
            autoFocus={false}
            hideStick={true}
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log('Focused')}
            onBlur={() => console.log('Blurred')}
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              containerStyle: VerifyPhoneStyle.container,
              pinCodeContainerStyle: VerifyPhoneStyle.pinCodeContainer,
              pinCodeTextStyle: VerifyPhoneStyle.pinCodeText,
              focusStickStyle: VerifyPhoneStyle.focusStick,
              focusedPinCodeContainerStyle:
                VerifyPhoneStyle.activePinCodeContainer,
              placeholderTextStyle: VerifyPhoneStyle.placeholderText,
              filledPinCodeContainerStyle:
                VerifyPhoneStyle.filledPinCodeContainer,
              disabledPinCodeContainerStyle:
                VerifyPhoneStyle.disabledPinCodeContainer,
            }}
          />
          <Text style={VerifyPhoneStyle.didntGetTheContainer}>
            <Text
              style={
                VerifyPhoneStyle.didntGetThe
              }>{`Didn’t get the OTP? `}</Text>
            <Text style={VerifyPhoneStyle.resendSmsIn}>Resend SMS in 18s</Text>
          </Text>
        </View>
      )}
    </>
  );
};

export default VerifyPhone;
