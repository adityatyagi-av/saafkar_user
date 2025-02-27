import {StyleSheet} from 'react-native';
import {colors} from './colors/colors';
import {typography} from './typography/typography';

const bottomSheetStyle = StyleSheet.create({
 
  
  handleStyle: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 49,
    backgroundColor: '#151515',
    boxShadow:'0px -14px 14px -8px #DBDBDB',
    
  },
  backgroundStyle: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    backgroundColor:'#151515',
  },
  bottomSheetStyle:{
    // backgroundColor:'#151515',
  },
  contentContainer: {
    flex: 1,
    // padding: 36,
    alignItems: 'center',
    backgroundColor:'#151515'
  },

  indicatorStyle:{ 
    marginTop:15,
    marginBottom:15,
    color:'#7A7A7A',
    backgroundColor:'#7A7A7A',
    width:50,
  }
  
});

export {bottomSheetStyle};
