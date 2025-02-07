import {StyleSheet} from 'react-native';

const OtpScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  arrowLeftIcon: {
    overflow: 'hidden',
  },
  otpVerification: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '500',
    fontFamily: 'Google Sans',
    color: '#000',
    textAlign: 'center',
  },
  arrowLeftParent: {
    // flex: 1,
    marginBottom: 20,
    width: '40%',
    flexDirection: 'row',
    marginTop: 60,
    marginLeft: -100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 80,
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
    flex: 1,
  },
  otpInputs:{
    flex:8,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
  },
  didntGetThe: {
    color: "#000"
    },
    resendSmsIn: {
    color: "#868686"
    },
    didntGetTheContainer: {
        marginTop:20,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Google Sans",
    textAlign: "center"
    }
});

export {OtpScreenStyles};
