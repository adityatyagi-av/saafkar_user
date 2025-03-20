import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PersonalDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  personalDetail: {
    fontSize: 24,
    fontWeight: 600,
    fontFamily: 'Google Sans',
    color: '#000',
    textAlign: 'center',
  },
  arrowLeftParent: {
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 100,
  },
  textDiv: {
    display: 'flex',
    marginRight: 20,
    marginLeft: 20,
    gap: 20,
    marginBottom: 24,
  },
  textHeading: {
    fontWeight: 500,
    fontSize: 16,
    color: '#333333',
  },

  textInput: {
    borderRadius: 10,
    border: '1 solid #DCDCDC',
    borderColor: '#DCDCDC',
    borderWidth: 1,
    paddingLeft: 16,
  },
  checkBox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderColor: '#A1A1A1',
    borderWidth: 1,
  },
  bottomContainer:{
    marginBottom:20,
    gap:30,
    marginLeft:wp('7.5%'),
    marginRight:wp('7.5%'),
    justifyContent:'center',
    alignItems:'flex-start'
  },
  checkBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
  },

  checkBoxText: {
    fontWeight: 500,
    fontSize: 12,
    color: '#6C7278',
  },
  checkBoxTextService:{
    fontWeight:600,
    fontSize:12,
    color:'#111827',
  },
  buttonContainer:{
    
  },
  button:{
    
  },
  buttonText:{
    alignSelf:'center',
    fontWeight:500,
    fontSize:24,
    color:'#FFFFFF'
  }
});

export {PersonalDetailStyles};
