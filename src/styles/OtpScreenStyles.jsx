import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OtpScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  arrowLeftIcon: {
    overflow: 'hidden',
  },
  otpVerification: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: 'Google Sans',
    color: '#000',
    textAlign: 'center',
  },
  arrowLeftParent: {
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-start',
    marginLeft:'20',
    gap: 100,
    
  },
  weHaveSent: {
    fontSize: 16,
  },
  text: {
    fontSize: 20,
  },
  weHaveSentAVerificationCo: {
    fontFamily: 'Google Sans',
  },
  xxxxxxxxxxx: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Google Sans',
  },
  weHaveSentContainer: {
    color: '#7a7a7a',
    textAlign: 'center',
    // flex: 1,
  },
  otpInputs: {
    // flex: 8,
    marginTop:20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  didntGetThe: {
    color: '#000',
  },
  resendSmsIn: {
    color: '#868686',
  },
  didntGetTheContainer: {
    marginTop: 20,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'Google Sans',
    textAlign: 'center',
  },
});

export {OtpScreenStyles};
