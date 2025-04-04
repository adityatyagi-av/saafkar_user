import React, {useCallback, useEffect, useState} from 'react';
import VerifyPhoneStyle from '../../../styles/componentStyle/bottomSheetComponents/verifyPhone';
import {Pressable, TextInput} from 'react-native-gesture-handler';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {FlatList, Image, Text, View} from 'react-native';
import chooseStyle from '../../../styles/componentStyle/bottomSheetComponents/chooseStyle';
import {BottomSheetFlatList, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import serviceStyle from '../../../styles/componentStyle/bottomSheetComponents/serviceStyle';
import CompleteImage from '../../../assets/images/complet.png';
import ExteriorImage from '../../../assets/images/exterior.png';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
const ServiceDetails = ({service = 1,currentComponent,setCurrentComponent}) => {
  const data = {
    2: {
      name: 'Complete',
      desc: 'Complete Shine – A full cleaning, inside and out, for a fresh, like-new feel',
      imageLink: CompleteImage,
      points: [
        {
          id: 1,
          heading: ' Includes Exterior Shine',
          desc2: 'Full-body wash and streak-free drying',
        },
        {
          id: 2,
          heading: 'Deep interior cleaning',
          desc2:
            ' Covers the dashboard, under seats, side vents, and door panels.',
        },
        {
          id: 3,
          heading: 'Refreshed look and feel',
          desc2: 'Enjoy a spotless, well-maintained car.',
        },
      ],
    },
    1: {
      name: 'Exterior',
      desc: '"Brilliant shine, every time – Elevate your ride’s look!"',
      imageLink: ExteriorImage,
      points: [
        {
          id: 1,
          heading: 'Deep shampoo wash',
          desc2: 'Removes dirt, dust, and grime.',
        },
        {
          id: 2,
          heading: 'Microfiber dry',
          desc2: 'No water spots, just a smooth, streak-free finish.',
        },
        {
          id: 3,
          heading: 'Enhanced shine',
          desc2: 'Restores the car’s polished look.',
        },
      ],
    },
  };

  return (
    <>
      <BottomSheetScrollView>
        <View style={chooseStyle.header}>
          <Pressable onPress={()=>setCurrentComponent('select-location')} style={chooseStyle.backButton}>
            <Svg
              width="6"
              height="12"
              viewBox="0 0 6 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.80008 11.3391C5.57918 11.5536 5.22191 11.5536 5.00155 11.3391L0.330909 6.79416C0.226358 6.69398 0.143109 6.5734 0.0862222 6.43976C0.0293355 6.30612 0 6.16221 0 6.01678C0 5.87135 0.0293355 5.72744 0.0862222 5.59379C0.143109 5.46015 0.226358 5.33958 0.330909 5.23939L5.03537 0.660872C5.14214 0.558548 5.28353 0.501035 5.43083 0.500014C5.57813 0.498992 5.72029 0.554539 5.82845 0.655372C5.88203 0.705167 5.92489 0.765521 5.9544 0.832699C5.98391 0.899877 5.99942 0.972447 5.99998 1.04592C6.00055 1.11938 5.98614 1.19219 5.95767 1.25982C5.9292 1.32744 5.88726 1.38846 5.83445 1.43908L1.52871 5.62822C1.47639 5.67832 1.43473 5.73862 1.40626 5.80547C1.37779 5.87231 1.36311 5.9443 1.36311 6.01705C1.36311 6.0898 1.37779 6.16179 1.40626 6.22863C1.43473 6.29548 1.47639 6.35579 1.52871 6.40588L5.80008 10.562C5.85239 10.6121 5.89404 10.6723 5.9225 10.7391C5.95096 10.8059 5.96564 10.8779 5.96564 10.9506C5.96564 11.0233 5.95096 11.0952 5.9225 11.162C5.89404 11.2288 5.85239 11.2891 5.80008 11.3391Z"
                fill="#979797"
              />
            </Svg>
            <Text style={chooseStyle.backText}>Back</Text>
          </Pressable>
        </View>
        <View style={serviceStyle.container}>
          <View style={serviceStyle.TextContainer}>
            <Text style={serviceStyle.TextMain}>{data?.[service]?.name}</Text>
            <Text style={serviceStyle.TextDesc}>{data?.[service]?.desc}</Text>
          </View>
          <View>
            <Image source={data?.[service]?.imageLink} />
          </View>
        </View>
        <LinearGradient
          colors={[
            'rgba(29, 29, 29, 0.5)',
            'rgba(188, 186, 186, 0.2)',
            'rgba(29, 29, 29, 0.5)',
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={serviceStyle.divider}
        />
        <Text style={serviceStyle.aboutText}>
          About {data?.[service]?.name} Shine
        </Text>
        <View style={serviceStyle.container2}>
          {data?.[service]?.points?.map(item => {
            return (
              <View style={serviceStyle.container2Inner} key={item?.id}>
                <Text style={serviceStyle.container2Heading}>
                  {item?.heading}
                </Text>
                <Text style={serviceStyle.container2Desc}>{item?.desc2}</Text>
              </View>
            );
          })}
        </View>
      </BottomSheetScrollView>
    </>
  );
};

export default ServiceDetails;
