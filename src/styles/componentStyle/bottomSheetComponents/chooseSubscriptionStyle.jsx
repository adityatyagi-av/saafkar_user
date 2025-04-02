import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SubscriptionStyle = StyleSheet.create({
  headingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chooseHeading: {
    fontWeight: 700,
    color: '#E4E4ED',
    fontSize: 40,
  },
  subscriptionHeading: {
    fontWeight: 700,
    color: '#727272',
    fontSize: 40,
    marginBottom: 10,
  },
  description: {
    fontWeight: 400,
    fontSize: 14,
    color: '#BBBBC8',
  },
  subHeading: {
    fontWeight: 600,
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 28,
    marginBottom: 28,
  },
  serviceContainerParent:{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:20,
    marginBottom:24
  },
  serviceContainer: {
    width: wp('90%'),
    height: 115,
    boxShadow: '0px 0px 4px 0px #FFFFFF7D',
    backgroundColor: '#0000000F',
    flexDirection: 'row',
    overflow: 'hidden',
    paddingTop: 14,
    paddingLeft: 16,
    justifyContent:'space-between',
    paddingRight:12
    // borderRadius:33
  },
  radioComponent:{
    flexDirection: 'row',
  },
  sideTag: {
    position: 'absolute',
    top: 8,
    right: -25,
    backgroundColor: '#FFE032',
    paddingVertical: 5,
    paddingHorizontal: 25,
    transform: [{rotate: '41.79deg'}],
    overflow: 'hidden',
    boxShadow: '0px 0px 4px 0px #FFE032',
  },
  sideTagText: {
    fontSize: 12,
    fontWeight: 700,
    color: '#6D157F',
  },
  radioContainer: {
    flexDirection: 'column',
  },
  radioInnerContainer: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: '#FFFFFF6B',
    borderStyle: 'solid',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    width: 16,
    height: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 56,
    boxShadow: '0px 0px 6.8px 0px #BE33DA',
  },
  detailsContainer: {
    marginLeft: 14,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  serviceName: {
    fontWeight: 700,
    fontSize: 16,
    color: '#E4E4ED',
  },
  serviceRenewText: {
    fontWeight: 341,
    fontSize: 14,
    color: '#BBBBC8',
  },
  serviceRenewDayText: {
    fontWeight: 700,
    fontSize: 14,
    color: '#E4E4ED',
  },
  PricingText: {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: 24,
  },
  PricingSubText: {
    color: '#D5D5D5',
    fontWeight: 400,
    fontSize: 16,
  },
  useNowContainer:{
    justifyContent:'flex-end',
    marginBottom:12
  },
  useNowButton:{
    backgroundColor:'#FFFFFF',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:6,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:32,
    paddingLeft:32,
  },
  useNowText:{
    color:'#6D157F',
    fontWeight:500,
    fontSize:16
  },
  CarSelectContainer:{
    gap:20,
  },
  CarContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#2C2C2C',
    paddingTop:14,
    paddingBottom:14,
    borderRadius:12
  },
  CarText:{
    color:'#858585',
    fontWeight:500,
    fontSize:12,
    width:113,
    textAlign:'center',
  },

});

export default SubscriptionStyle;
