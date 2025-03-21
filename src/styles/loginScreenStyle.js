import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const loginStyles = StyleSheet.create({
  container: {
    
    flex: 1,
    maxHeight:hp('100%'),
    backgroundColor: '#ffffff',
    width:wp('100%'),
  },
  rectangleView: {
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    backgroundColor: '#6d157f',
    flex: 4,
    width: '100%',
    height: hp('36%'),
  },
  saafkarLogo1Parent: {
    position: 'absolute',
    width: '60%',
    backgroundColor: '#ffffff',
    top: hp('15%'),
    left: '20%',
    height: 96,
    borderRadius: 49,
    flex: 1,
  },
  saafkarLogo1: {
    width: 190,
    height: 96,
    resizeMode: 'cover',
    marginLeft: 30,
  },
  loginInputContainer: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    // flex: 5,
    height:hp('60%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textTypo: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
  },
  termsOfService1Typo: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
  },
  bySigningUp: {
    color: '#6c7278',
  },
  termsOfService: {
    color: '#111827',
  },
  and1: {
    color: '#6c7278',
  },
  dataProcessingAgreement: {
    color: '#111827',
  },
  bySigningUpContainer1: {
    width: '100%',
  },
  bySigningUpContainer: {
    marginTop:20,
    fontSize: 10,
    letterSpacing: -0.1,
    lineHeight: 15,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    width: 297,
  },

  loginInputHeading: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: 'Google Sans',
    color: '#353535',
    textAlign: 'center',
    width: 362,
  },
  loginOrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 17,
  },
  lineView: {
    borderStyle: 'solid',
    borderColor: '#cdcdcd',
    borderTopWidth: 1,
    flex: 1,
    width: '100%',
    height: 1,
  },
  logInOr: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '500',
    fontFamily: 'Google Sans',
    color: '#333',
    textAlign: 'center',
    width: 'full',
    height: 29,
    marginLeft: 10,
    marginRight: 10,
  },
  frameView: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 2,
    width: '40%',
    height: 44,
    // overflow: 'hidden',
  },
  inputMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  indiaIcon: {
    flex: 1,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  continue: {
    fontSize: 18,
    // lineHeight: 31,
    fontWeight: '500',
    fontFamily: 'Google Sans',
    color: '#fff',
    // textAlign: 'left',
  },
 
  socialContainer: {
    gap: 78,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleParent: {
    boxShadow: '0px 0px 4px 3px #0000001A',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: '#fff',

    width: 52,
    height: 44,
    overflow: 'hidden',
  },
  googleIcon: {
    position: 'absolute',
    marginTop: -12,
    marginLeft: -11.5,
    top: '50%',
    left: '50%',
    overflow: 'hidden',
  },
  termsContainer:{
    height:hp('10%'),
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

export {loginStyles};
