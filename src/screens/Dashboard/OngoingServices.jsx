import React, {useState} from 'react';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import DashboardScreenStyles from '../../styles/DashboardScreenStyle';

import Video from 'react-native-video';
import {splashStyles} from '../../styles/splashScreenStyles';
import Svg, {Path} from 'react-native-svg';
const OngoingServices = () => {
  const [videoOn, setVideoOn] = useState(true);
  return (
    <View style={DashboardScreenStyles.ongoingContainer}>
      <View style={DashboardScreenStyles.ongoingTextContainer}>
        <View style={DashboardScreenStyles.ongoingBar} />
        <Text style={DashboardScreenStyles.ongoingText}>Ongoing</Text>
        <View style={DashboardScreenStyles.ongoingBar} />
      </View>

      <ScrollView
        contentContainerStyle={DashboardScreenStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {Array.from({length: 10}).map((_, index) => (
          <View style={DashboardScreenStyles.ongoingCarContainer} key={index}>
            <View style={DashboardScreenStyles.leftContainerPart}>
              <View style={DashboardScreenStyles.companyLogoContainer}>
              <Image
                    style={DashboardScreenStyles.companyLogo}
                    // resizeMode="contain"
                    source={require('../../assets/images/suzuki.png')}
                  />
              </View>
              <View style={DashboardScreenStyles.promoTextContainter}>
                <Text style={DashboardScreenStyles.promoTextNormal}>
                Swing by!
                </Text>
                <Text style={DashboardScreenStyles.promoTextBold}>
                We'll take care of your vehicle repairs.
                </Text>
                <Text style={DashboardScreenStyles.promoTextNormal}>
                We do it all!
                </Text>
              </View>
            </View>
            <View style={DashboardScreenStyles.rightContainerPart}>
            <Image
                    style={DashboardScreenStyles.companyLogo}
                    // resizeMode="contain"
                    source={require('../../assets/images/swift.png')}
                  />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default OngoingServices;
