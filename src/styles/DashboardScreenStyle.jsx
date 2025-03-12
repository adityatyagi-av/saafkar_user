import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DashboardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // alignContent:'center',
    backgroundColor: '#ffffff',
  },
  topContainer: {
    marginTop:16,
    // flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:8,
    marginRight:8,
  },
  locationBox:{
    flex:1,
    flexDirection:'row',
    maxWidth:wp('70%'),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffff',
  },
  locationIconBox:{
    position:'relative',
    // top:5,
  },
  locationTextBox:{
    flex:1,
    flexDirection:'column'
  },
  locationText1:{
    fontWeight:600,
    fontSize:24,
    color:'#333333',
  },
  locationText2:{
    fontSize:6,
    fontWeight:200,
    color:'#3A3A3A'
  },
  iconBox:{
    flexDirection:'row',
    gap:10,
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    width:50,
    height:50,
    borderRadius:4,
    boxShadow: '0px 0px 4px 0px #00000026'
  },
  mainIcon:{
    alignSelf:'center',
  },
  searchBarContainer:{
    height:hp('5%'),
    width:wp('92%'),
    marginLeft:wp('6%'),
    marginRight:wp('2.2%'),
    borderRadius:12,
    marginTop:16,
    boxShadow: "0px 4px 33.2px 0px #00000026",
    justifyContent:'center',
    alignItems:'space-between',
  },
});

export default DashboardScreenStyles;
