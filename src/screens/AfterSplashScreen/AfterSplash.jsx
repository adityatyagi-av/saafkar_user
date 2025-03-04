import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SkipButton from '../../components/Button/SkipButton';
import {buttonStyles} from '../../styles/buttonStyles';
import {splashStyles} from '../../styles/splashScreenStyles';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';
const AfterSplashScreen = () => {
  const [videoOn, setVideoOn] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigation = useNavigation();
  const tryPress=()=>{
    if(!videoOn){
      setVideoOn(true);
    }
    else{
      navigation.navigate('Login');
    }
  }
  return (
    <SafeAreaProvider style={splashStyles.container}>
      <SafeAreaView style={splashStyles.innerContainer}>
        <View style={buttonStyles.SkipButtonContainer}>
          <SkipButton navigationScreen={'Splash'} buttonText={'Skip'} />
        </View>
          <View style={splashStyles.innerContainer}>
          <Video
              source={require('../../assets/video_car.mp4')}
              style={splashStyles.videoStyle}
              resizeMode="cover"
              repeat
              paused={!videoOn} 
              poster={require('../../assets/images/uglyCar.png')} 
              autoplay
              controls={false}
            />
          <View style={splashStyles.seamlessCleaningServiceParent}>
            <Text
              style={[
                splashStyles.seamlessCleaningService,
                splashStyles.quicklyBookYourFlexBox,
              ]}>
              Seamless Cleaning service{' '}
            </Text>
            <Text
              style={[
                splashStyles.quicklyBookYour,
                splashStyles.quicklyBookYourFlexBox,
              ]}>
              Quickly book your car cleaning service and enjoy exclusive
              savings!
            </Text>
          </View>
          <View style={splashStyles.ellipseParent}>

            {videoOn?<View style={splashStyles.grayEllipse} />:<View style={splashStyles.pinkEllipse} />}
            {videoOn?<View style={splashStyles.pinkEllipse} />:<View style={splashStyles.grayEllipse} />}
            
          </View>
        </View>
        <View />
        <View style={[splashStyles.backParent, splashStyles.backParentFlexBox]}>
          <Pressable >
            <Text style={[splashStyles.back, splashStyles.backTypo]} onPress={()=>setVideoOn(false)}>{!videoOn&& 'Back'}</Text></Pressable>
          <Pressable
            style={[splashStyles.groupWrapper]}
            onPress={tryPress}>
            <View style={splashStyles.tapToCleanWrapper}>
              <Text style={[splashStyles.tapToClean, splashStyles.backTypo]}>
               {videoOn ? 'Try Now' : 'Tap to clean'}
              </Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


export default AfterSplashScreen;
