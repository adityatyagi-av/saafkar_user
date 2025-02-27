import {StyleSheet} from 'react-native';
import {colors} from './colors/colors';
import {typography} from './typography/typography';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 2,
  },
  saf1Icon: {
    // flex: 1,
    width: '100%',
    height: 231,
  },
  quicklyBookYourFlexBox: {
    textAlign: 'center',
    letterSpacing: 0,
  },
  seamlessCleaningService: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#6d157f',
    width: 335,
  },
  quicklyBookYour: {
    alignSelf: 'stretch',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#797979',
  },
  seamlessCleaningServiceParent: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 19,
  },
  ellipseParent: {
    // flex: 1,
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  pinkEllipse: {
    width: 10,
    backgroundColor: '#8403D4',
    height: 10,
    borderRadius: 50,
  },
  grayEllipse: {
    width: 9,
    backgroundColor: '#C6C6C6',
    height: 9,
    borderRadius: 50,
  },
  backParentFlexBox: {
    flex:2,
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backTypo: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    letterSpacing: 0,
    fontSize: 20,
  },
  back: {
    color: '#c6c6c6',
  },
  tapToClean: {
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    color: '#6d157f',
    textAlign: 'center',
  },
  tapToCleanWrapper: {
    width: 127,
    height: 30,
  },
  groupWrapper: {
    marginRight:30,
    boxShadow: '0px 4px 25.9px 0px #00000033',

    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 25.9,
    elevation: 25.9,
    shadowOpacity: 1,
    borderRadius: 66,
    backgroundColor: '#fff',
    width: 190,
    height: 76,
    justifyContent: 'center',
    // padding: 19,
    alignItems:'center',
    alignContent:'center'
  },
  backParent: {
    flex: 1,
    width: '100%',
    marginBottom:-90,
    justifyContent: 'space-between',
  },
  videoStyle: {
    width: '100%',
    height: 231, // Same as image
  },
  
});

export {splashStyles};
