import {StyleSheet} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const chooseStyle = StyleSheet.create({
 brandText:{
    fontWeight:500,
    fontSize:16,
    color:'#858585',
    alignSelf:'flex-start',
    marginTop:18,
    marginBottom:20,
    marginLeft:20,
 },
 companySelectContainer:{
    marginLeft:20,
    marginRight:20,
 },
 companyContainer:{
    display:'flex',
    backgroundColor:'#FFFFFF',
    margin:10,
    width:98,
    height:98,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
 },
 carContainer:{
    display:'flex',
    backgroundColor:'#FFFFFF',
    margin:10,
    width:98,
    height:98,
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:8,
 },
 grid:{
    justifyContent:'space-between',
 },
 carNameContainer:{
    backgroundColor:'#3C3C3C',
    width:98,
    justifyContent:'center',
    alignItems:'center',
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8,
 },
 carName:{
    fontWeight:500,
    fontSize:16,
    color:'#FFFFFF',
 },
 header:{
    marginTop:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:24,
    alignSelf:'flex-start',
    marginLeft:20,
 },
 backButton:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
 },
 backText:{
fontWeight:500,
fontSize:16,
color:'#979797'
 },
 companyText2:{
    fontWeight:500,
    fontSize:20,
    color:'#ffffff'
 },
 inputAddressContainer:{
   display:'flex',
   marginTop:20,
   gap:20,
   marginBottom:20
 },
 inputAddress:{
   width:wp('90%'),
   backgroundColor:'#232323',
   borderRadius:16,
   height:51,
   padding:10,
   color:'#FFFFFF',
 },
 saveAddress:{
   backgroundColor:'#FFFFFF',
   boxShadow: '0px 4px 4px 0px #00000040',
   borderRadius:16,
   display:'flex',
   flexDirection:'row',
   paddingTop:8.5,
   paddingBottom:8.5,
   justifyContent:'center',
   alignItems:'center',
   gap:10,
 },
 saveAddressText:{
   fontWeight:500,
   fontSize:22,
   color:'#6D157F',
 },
 buttonContainer:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:14,
   alignItems:'center',
   width:wp('90%'),
   gap:30,
 },
 activeButton:{
   backgroundColor:'#FFFFFF',
   paddingTop:12,
   paddingBottom:12,
   paddingLeft:40,
   paddingRight:40,
   borderRadius:16,
 },
 inActiveButton:{
   backgroundColor:'#2A2A2A',
   paddingTop:12,
   paddingBottom:12,
   paddingLeft:40,
   paddingRight:40,
   borderRadius:16,
 },
 activeButtonText:{
   fontWeight:500,
   fontSize:16,
   color:'#6D157F',
 },
 inActiveButtonText:{
   fontWeight:500,
   fontSize:16,
   color:'#656565',
 },
 addAddressContainer:{
   marginTop:20,
   width:wp('90%'),
   borderColor:'#303030',
   borderRadius:12,
   borderWidth:1,
   height:76,
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   alignContent:'center',
 },
 addAddressText:{
   fontWeight:500,
   fontSize:16,
   color:'#656565',
   alignSelf:'center'
 },
 addAddressInnerContainer:{
   width:wp('50%'),
 },
 locationBox: {
   flex: 1,
   flexDirection: 'row',
   Width: wp('90%'),
   marginLeft:20,
   alignItems: 'center',
   justifyContent: 'center',
   // backgroundColor: '#ffff',
 },
 locationIconBox: {
   position: 'relative',
   // top:5,
 },
 locationTextBox: {
   flex: 1,
   flexDirection: 'column',
   justifyContent:'center',
   alignItems:'flex-start',
 },
 locationText1: {
   fontWeight: 600,
   fontSize: 24,
   color: '#FFFFFF',
 },
 locationText2: {
   fontSize: 16,
   fontWeight: 500,
   color: '#6A6A6A',
 },
 iconBox: {
   flexDirection: 'row',
   gap: 10,
 },
 serviceButtonContainer:{
   display:'flex',
   flexDirection:'row',
   gap:22,
 },
 serviceButton:{
   display:'flex',
   flexDirection:'row',
   backgroundColor:'#FFFFFF',
   borderRadius:24,
   paddingTop:11.5,
   paddingBottom:11.5,
   paddingRight:21,
   paddingLeft:21,
   gap:14,
 },
 serviceButtonText:{
fontWeight:600,
fontSize:16,
color:'#6D157F'
 }
});

export default chooseStyle;
