import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const VerifyPhoneStyle = StyleSheet.create({
  verifyContainer: {
    marginTop:2,
    backgroundColor: '#434343',
    width: wp('95%'),
    height: 58,
    
    borderRadius: 50,
    paddingLeft: 18,
    // flex: 0.19,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 2,
    alignItems: 'center',
  },
  moveNext: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    boxShadow: '0px 4px 4px 0px #00000040',
  },
  moveNextSent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    boxShadow: '0px 4px 4px 0px #00000040',
  },
  input: {
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
    maxWidth: wp('70%'),
  },
  bar: {
    flex:0.006,
    marginTop: 22,
    marginBottom: 16,
    width: '100%',
    height: 1,
    backgroundColor: '#7D7D7D',
  },
  ContentText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 16,
  },
  ContentBox: {
    marginBottom: 55,
    flex:0.12,
  },
  Otp: {
    flex: 0.15,
    width: wp('95%'),
  },
  didntGetTheContainer: {
    marginTop: 20,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Google Sans',
    textAlign: 'center',
  },
  resendSmsIn: {
    color: '#868686',
  },
  didntGetThe: {
    color: '#FFFFFF',
  },
  container:{

  },
  pinCodeContainer:{
    height:39,
    width:39,
    borderRadius:6,
    backgroundColor:'#FFFFFF',
    borderColor:'#CFC9C9',
    borderWidth:1,
  },
  pinCodeText:{
    color:'#ffffff'
  },
  focusStick:{},
  activePinCodeContainer:{
    backgroundColor:'#151515',
    borderColor:'#FFFFFF',
  },
  placeholderText:{},
  filledPinCodeContainer:{
    backgroundColor:'#151515', 
  },
  disabledPinCodeContainer:{
    backgroundColor:'#FFFFFF',
    borderColor:'#CFC9C9',
  }
});

export default VerifyPhoneStyle;
