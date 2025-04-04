import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, TextInput} from 'react-native-gesture-handler';

import {FlatList, Image, ScrollView, Text, View} from 'react-native';

import {BottomSheetFlatList, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import SubscriptionStyle from '../../../styles/componentStyle/bottomSheetComponents/chooseSubscriptionStyle';

const ChooseSubscription = ({
  selectedVehicle,currentComponent,setCurrentComponent
}) => {
  return (
    <> 
      <View style={SubscriptionStyle.headingContainer}>
        <Text style={SubscriptionStyle.chooseHeading}>Choose your</Text>
        <Text style={SubscriptionStyle.subscriptionHeading}>Subscriptions</Text>
        <Text style={SubscriptionStyle.description}>
          Seamless subscription management,
        </Text>
        <Text style={SubscriptionStyle.description}>
          simplified for your convenience.
        </Text>
      </View>

      <Text style={SubscriptionStyle.subHeading}>
        Select your choice for your SUV car
      </Text>
<View style={SubscriptionStyle.serviceContainerParent} >

{/* individual service container */}
      <View style={SubscriptionStyle.serviceContainer}>
        {/* tag styling */}
        <View style={SubscriptionStyle.sideTag}>
          <Text style={SubscriptionStyle.sideTagText}>26 Days</Text>
        </View>
        {/* rest component  */}
        <View style={SubscriptionStyle.radioComponent}>

        
        <View style={SubscriptionStyle.radioContainer}>
          <View style={SubscriptionStyle.radioInnerContainer}>
            {<View style={SubscriptionStyle.radioActive} />}
          </View>
        </View>
        <View style={SubscriptionStyle.detailsContainer}>
          <View>
            <Text style={SubscriptionStyle.serviceName}>Exterior Cleaning</Text>
            <Text style={SubscriptionStyle.serviceRenewText}>
              Renew in{' '}
              <Text style={SubscriptionStyle.serviceRenewDayText}>26</Text> days
            </Text>
          </View>
          <Text style={SubscriptionStyle.PricingText}>
            ₹31 / <Text style={SubscriptionStyle.PricingSubText}>Per Day</Text>
          </Text>
        </View>
        </View>
        <View style={SubscriptionStyle.useNowContainer}>

            <Pressable style={SubscriptionStyle.useNowButton}>
                <Text style={SubscriptionStyle.useNowText}>Use Now</Text>
            </Pressable>
        </View>
      </View>
      <View style={SubscriptionStyle.serviceContainer}>
        {/* tag styling */}
        <View style={SubscriptionStyle.sideTag}>
          <Text style={SubscriptionStyle.sideTagText}>26 Days</Text>
        </View>
        {/* rest component  */}
        <View style={SubscriptionStyle.radioComponent}>

        
        <View style={SubscriptionStyle.radioContainer}>
          <View style={SubscriptionStyle.radioInnerContainer}>
            {<View style={SubscriptionStyle.radioActive} />}
          </View>
        </View>
        <View style={SubscriptionStyle.detailsContainer}>
          <View>
            <Text style={SubscriptionStyle.serviceName}>Exterior Cleaning</Text>
            <Text style={SubscriptionStyle.serviceRenewText}>
              Renew in{' '}
              <Text style={SubscriptionStyle.serviceRenewDayText}>26</Text> days
            </Text>
          </View>
          <Text style={SubscriptionStyle.PricingText}>
            ₹31 / <Text style={SubscriptionStyle.PricingSubText}>Per Day</Text>
          </Text>
        </View>
        </View>
        <View style={SubscriptionStyle.useNowContainer}>

            <Pressable style={SubscriptionStyle.useNowButton}>
                <Text style={SubscriptionStyle.useNowText}>Use Now</Text>
            </Pressable>
        </View>
      </View>
      </View>


      {/* <View style={SubscriptionStyle.CarSelectContainer}> */}
    {/*horizontal scroll view here */}

    <BottomSheetScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginBottom: 60}}>
        <View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View>
<View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View><View style={SubscriptionStyle.CarContainer}>
            <Text style={SubscriptionStyle.CarText}>
                SUV
            </Text>
        </View>
        </BottomSheetScrollView>
      {/* </View> */}
    </>
  );
};

export default ChooseSubscription;
