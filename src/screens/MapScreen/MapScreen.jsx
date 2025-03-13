import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomBottomSheet from '../../components/BottomSheet/CustomBottomSheet';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const MapScreen = ({navigation}) => {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 28.62245499847938,
    longitude: 77.41847672858427,
  });
  const mapRef=useRef(null)
  return (
    <>
      <View style={styles.container}>

        <MapView
        ref={mapRef}

        onPress={(e)=> setMarkerPosition(e.nativeEvent.coordinate)}
          showsCompass={true}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: markerPosition.latitude,
            longitude: markerPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google">
          <Marker
            draggable
            coordinate={markerPosition}
            onDragEnd={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
            title="My Location"
          />
        </MapView>
      </View>
      <CustomBottomSheet  
//       bottomSheetComponent={      <GooglePlacesAutocomplete
//         placeholder="Type a place"
//         onPress={(data, details = null) => console.log(data, details)}
//         query={{key: "AIzaSyAR160_h_9UPdyRSjULGox38FJFQ9UncZo" ,language: 'en',}}
//         fetchDetails={true}
//         onFail={error => console.log(error)}
//         onNotFound={() => console.log('no results')}
//         predefinedPlaces={[
//           {
//             type: 'favorite',
//             description: 'Dominos Pizza',
//             geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
//           },
//           {
//             type: 'favorite',
//             description: 'Chicken Republic',
//             geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
//           },
//         ]}
//       />
// }
/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
