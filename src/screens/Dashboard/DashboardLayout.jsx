import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';

import Video from 'react-native-video';
import {splashStyles} from '../../styles/splashScreenStyles';
import Svg, { Path } from 'react-native-svg';
const DashboardLayout = () => {
  const [videoOn, setVideoOn] = useState(true);
  return (
    <View style={DashboardScreenStyles.heroContainer}>
      <View style={DashboardScreenStyles.carContainer}>
        <Video
          source={require('../../assets/video_car.mp4')}
          style={DashboardScreenStyles.videoStyle}
          resizeMode="cover"
          repeat
          paused={!videoOn}
          poster={require('../../assets/images/uglyCar.png')}
          autoplay
          controls={false}
        />
      </View>
      <Pressable style={DashboardScreenStyles.tapContainer}>
        <Text style={DashboardScreenStyles.tapContainerText}>Tap now for a spotless ride in minutes!</Text>
        <Svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M0.320312 3.32011H14.2678L12.2541 5.33387L12.7066 5.78635L15.4928 3.00011L12.7066 0.213867L12.2541 0.666348L14.2678 2.68011H0.320312V3.32011Z" fill="#6D157F"/>
</Svg>

      </Pressable>
    </View>
  );
};

export default DashboardLayout;
