import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

export default function GoogleMapView() {

  // university latitude and longitude 
  const [mapRegion, setMapRegion] = useState({
    latitude: 24.3993,
    longitude: 88.6449,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  }, []);

  return (
    <View style={styles.mainView}>
      {/* google map  */}
      <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={mapRegion}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
    mapView: {
        height: Dimensions.get('screen').height*0.25,
      width: Dimensions.get('screen').width * 0.90,
    borderRadius:100
    }
})