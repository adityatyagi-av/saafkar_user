import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SelectCarStyle = StyleSheet.create({
  headingContainer:{
    display:'flex',
    flexDirection:'column',
    alignSelf:'flex-start',
    gap:12,
    marginLeft:wp('5%'),
    marginRight:wp('5%'),
  },
    heading:{
    fontWeight:500,
    fontSize:24,
    color:'#ffffff',
  },
  subHeading:{
    fontWeight:300,
    fontSize:12,
    color:'#ffffff',
  },
  heading2Container:{
    display:'flex',
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    marginTop:16,
    marginBottom:12,
  },
  line:{
    flex:1,
    height:1,
    color:'#565555',
    borderStyle: 'solid',
    borderColor: '#cdcdcd',
    borderTopWidth: 1,
    width: wp('35%'),
  },
  heading2:{
    color:'#C8C8C8',
    fontWeight:500,
    fontSize:16
  },
  carAddedContainer:{
gap:16
  },
  borderContainer: {
    padding: 1,
    borderRadius: 12,
  },
  innerContent: {
    backgroundColor: '#151515',
    borderRadius: 12,
    height:76,
    width:wp('90%'),
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:16,
  },
  carContainerMain:{
    display:'flex',
    flexDirection:'row',
    gap:12,
  },
  carContainer:{
    backgroundColor: '#151515',
    borderRadius: 12,
    height:44,
    width:44,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  carNameContainer:{
    gap:6,
  },
  companyNameText:{
    fontWeight:700,
    fontSize:16,
    color:'#E4E4ED',
  },
  carNameText:{
    color:'#BBBBC8',
    fontWeight:341,
    fontSize:14,
  },
  radioContainer:{
    width:27,
    height:26,
    backgroundColor:'#FFFFFF',
    borderRadius:26,
    marginRight:16,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  radioInnerContainer:{
    width:13,
    height:12,
    backgroundColor:'#6D157F',
    borderRadius:26,
    boxShadow: '0px 0px 4px 0px #6D157F'
  },
  addCarContainer:{
    marginTop:8,
    marginBottom:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:163,
    // width:wp('90%'),
    marginRight:5,
    marginLeft:5,
    backgroundColor:'#262626',
    boxShadow: '0px 0px 16.1px 0px #FFFFFF52',
    borderRadius:12,
  },
  addCarTextContainer:{
    marginLeft:31,
    marginTop:28,
    gap:42,
  },
  addNewText:{
color:'#595959',
fontWeight:500,
fontSize:16,
  },
  carText:{
fontFamily:'Poppins',
fontStyle:'italic',
fontWeight:700,
fontSize:34,
color:'#FFFFFF',
// boxShadow: '0px 0px 14.6px 0px #FFFFFF40'

  }
});

export default SelectCarStyle;
