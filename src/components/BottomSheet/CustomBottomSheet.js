import React, {useEffect, useRef} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

const CustomBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = ['25%', '50%','75%'];


  const handleOpenSheet = () => bottomSheetRef.current?.present();
  const renderContent = () => (
    <BottomSheetView style={styles.contentContainer}>
      <Text>This is your bottom sheet! 🎉</Text>
    </BottomSheetView>
  );
  useEffect(()=>{
    handleOpenSheet();
},[]);

  return (
    <View style={styles.container}>
      <Button title="Open Sheet" onPress={handleOpenSheet} />

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
          />
        )}>
        {renderContent()}
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});

export default CustomBottomSheet;
