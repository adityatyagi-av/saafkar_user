import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView, Pressable} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {bottomSheetStyle} from '../../styles/componentStyle/BottomSheetStyle';
import LinearGradient from 'react-native-linear-gradient';

const CustomBottomSheet = ({bottomSheetComponent}) => {
  // ref
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation();

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const linearBackgroundComponent=()=>{
    return(
 <LinearGradient
            colors={[
              'rgba(107, 21, 125, 0)',
              'rgba(107, 21, 125, 0.4)',
              'rgba(107, 21, 125, 0.4)',
              'rgba(107, 21, 125, 0)',
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 0.1, 0.9, 1]}
          />
    )
  }
  const handleComponent=()=>{
    return(
      <View style={bottomSheetStyle.contentContainer}><Text>Awesome</Text></View>
    )
  }
  // renders
  return (
    <>

      <BottomSheet
        handleStyle={bottomSheetStyle.handleStyle}
        handleIndicatorStyle={bottomSheetStyle.indicatorStyle}
        // handleComponent={handleComponent}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={['10%', '50%']}
        backgroundStyle={bottomSheetStyle.backgroundStyle}
        index={0}
        style={bottomSheetStyle.bottomSheetStyle}
        backgroundComponent={linearBackgroundComponent}>
        <BottomSheetView style={bottomSheetStyle.contentContainer}
        >

  {bottomSheetComponent}
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default CustomBottomSheet;
