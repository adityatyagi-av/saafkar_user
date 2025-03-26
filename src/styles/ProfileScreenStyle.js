import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProfileScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'space-between'
  },
  profileUpperContainer: {
   
    display: 'flex',
    boxShadow: '0px 4px 28px 0px #00000026',
    paddingBottom:36,
    borderBottomLeftRadius:29,
    borderBottomRightRadius:29,
  },
  arrowLeftParent: {
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: '20',
    gap: 120,
  },
  nameContainer: {
    alignSelf: 'center',
  },
  nameBox: {
    fontWeight: 600,
    fontSize: 28,
    color: '#6D157F',
  },
  locationBoxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationBox: {
    display: 'flex',
    maxWidth: wp('80%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    marginTop: 25,
  },
  profileContainerBox: {
    marginLeft: wp('6%'),
    marginRight: wp('6%'),

    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
    gap: wp('4.33%'),
  },
  profileContainer: {
    height: wp('25%'),
    width: wp('25%'),
    boxShadow: '0px 4px 11.5px 0px #00000014',
    borderRadius: 8,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:8.33,
  },
  profileContainerText:{
    color:'#434343',
    fontWeight:500,
    fontSize:12,
  },
  profileLowerContainer:{
    display:'flex',
    marginTop:40,
    gap:38
  },
  RedirectContainer:{
    display:'flex',
    flexDirection:'row',
    gap:20,
    paddingLeft:20,
    paddingRight:20,
    alignItems:'center',
  },
  redirectText:{
    fontWeight:400,
    fontSize:20,
    color:'#303030',
  },
  bottomContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:hp('8%'),
    boxShadow: '0px -2px 26.3px 0px #0000001A'

  },
  logoutText:{
    fontWeight:500,
    fontSize:24,
    color:'#6D157F',
  }
});

export default ProfileScreenStyle;
