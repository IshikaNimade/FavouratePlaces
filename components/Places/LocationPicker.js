import React, { useState , useEffect} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import OutlinedButton from '../ui/OutlinedButton';
import { getAddress, getMapPreview } from '../../util/location';
import { Colors } from '../../constants/styles';

import { useNavigation, useRoute , useIsFocused} from '@react-navigation/native';


function LocationPicker({ onPickLocation }) {

  const [pickedLocation, setPickedLocation] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log("route.params:", route.params);
    if (isFocused && route.params) {
      console.log("route.params: ", route.params);
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
      console.log("map picked location: ", mapPickedLocation);
    }
  }, [route, isFocused]);


  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    }
  
    handleLocation();
  }, [pickedLocation, onPickLocation]);


  async function getLocationHandler() {
    Geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setPickedLocation(location);
        console.log("location: ",position);
        console.log("location: ",location);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation !== null) {

    const mapUri = getMapPreview(pickedLocation.lat, pickedLocation.lng);
    console.log("picked location: ",pickedLocation);

    locationPreview = (
      <Image style={styles.image} source={{ uri: mapUri }} />
    );

    console.log("location preview: ", locationPreview);

  }


  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={() => navigation.navigate('Map')}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100, 
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
