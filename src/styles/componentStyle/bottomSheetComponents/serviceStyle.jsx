import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const serviceStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:wp('100%'),
  
  },
  TextContainer: {
    width: wp('38%'),
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
    marginLeft:20
  },
  TextMain: {
    fontWeight: 500,
    fontSize: 34,
    color: '#FFFFFF',
    fontStyle: 'italic',
  },
  TextDesc: {
    fontWeight: 500,
    fontStyle: 'italic',
    fontSize: 16,
    color: '#FFFFFF',
    textShadowColor: '#8C8C8C',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 27.8,
    lineHeight: 22,
    letterSpacing:1,
  },
  container2:{
    display:'flex',
    gap:12,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  },
  container2Inner:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:8,
    paddingTop:18,
    paddingBottom:18,
    width:wp('90%'),
    borderRadius:20,
    borderWidth:1,
    borderColor:'#434343',
    backgroundColor:'#242424'
  },
  container2Desc:{
    fontWeight:400,
    fontSize:10,
    color:'#A8A8A8'
  },
  container2Heading:{
    fontWeight:700,
    fontSize:16,
    color:'#FFFFFF'
  },
  divider: {
    width: '100%',
    height: 2,
    marginBottom:20,
  },
  aboutText:{
    color:'#FFFFFF',
    fontWeight:500,
    fontSize:20,
    alignSelf:'center'
  },
  buttonText:{
    fontWeight:500,
    fontSize:16,
    color:'#FFFFFF',
    alignSelf:'center'
  },
  bottomButtonContainer:{
    width:wp('100%'),
    height:68,
    backgroundColor:'#FFFFFF',
    boxShadow: '0px -5px 21.9px 0px #0000001A',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:10,
  },
  bottomButton:{
    width:wp('90%'),
    backgroundColor:'#6D157F',
    // boxShadow: '0px -0.33px 0.67px 0px #5C5C5C',
    paddingTop:12,
    paddingBottom:12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    borderRadius:34,
    gap:8,
boxShadow:'0px 2.67px 3.34px 0px #00000033'
  }
});

export default serviceStyle;
