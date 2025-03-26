import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DashboardScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // alignContent:'center',
    backgroundColor: '#ffffff',
  },
  topContainer: {
    marginTop: 16,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  locationBox: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: wp('70%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  locationIconBox: {
    position: 'relative',
    // top:5,
  },
  locationTextBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  locationText1: {
    fontWeight: 600,
    fontSize: 24,
    color: '#333333',
  },
  locationText2: {
    fontSize: 6,
    fontWeight: 200,
    color: '#3A3A3A',
  },
  iconBox: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 4,
    boxShadow: '0px 0px 4px 0px #00000026',
  },
  mainIcon: {
    alignSelf: 'center',
  },
  searchBarContainer: {
    height: hp('5%'),
    width: wp('92%'),
    marginLeft: wp('6%'),
    marginRight: wp('2.2%'),
    borderRadius: 12,
    marginTop: 16,
    boxShadow: '0px 4px 33.2px 0px #00000026',
    justifyContent: 'center',
    alignItems: 'space-between',
  },
  heroContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  carContainer: {
    marginTop: 92,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  videoStyle: {
    width: 260,
    height: 149,
  },
  tapContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderColor: '#EBEBEB',
    borderWidth: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    gap: 39,
  },
  tapContainerText: {
    color: '#6D157F',
  },
  heroTopContainer: {
    boxShadow: '0px 4px 28px 0px #00000026',
    paddingBottom: 28,
    borderBottomLeftRadius: 29,
    borderBottomRightRadius: 29,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  ongoingContainer:{
    
  },
  ongoingTextContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  gap:10,
  marginTop:20,
  marginBottom:16,
  },
  ongoingBar:{
    width:wp('32%'),
    height:1.2,
    backgroundColor:'#E1E1E1',
  },
  ongoingText:{
    color:'#676767',
    fontWeight:500,
    fontSize:16,
  },
  ongoingCarContainer:{
    marginTop:4,
    width:wp('90%'),
    minHeight:145,
    boxShadow: '0 4 8 0 #00000026',
    // box-shadow: 0px 4px 28px 0px #00000026;

    marginBottom:16,
    borderRadius:16,
    display:'flex',
    flexDirection:'row',
  },
  leftContainerPart:{
    width:wp('45%'),
    paddingLeft:25,
  },
  rightContainerPart:{
    width:wp('45%'),
    alignItems:'center',
    justifyContent:'center',
  },
  companyLogo:{
    marginTop:10,
  },
  promoTextContainter:{
    marginTop:18,
  },
  promoTextNormal:{
    fontWeight:400,
    fontSize:14.6,
    color:'#1D1D1D',
  },
  promoTextBold:{
    fontWeight:700,
    fontSize:14.6,
    color:'#1D1D1D',
  }
});

export default DashboardScreenStyles;
