import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion = {{ 
        latitude : -30.0366563,
        longitude : -51.2183113, 
        latitudeDelta : 0.0922, 
        longitudeDelta : 0.0421,
      }}
    >
      <MapView.Marker
      coordinate={{
          latitude: -30.0366563,
          longitude: -51.2183113}}
        title={"Parque Farroupilha"}
        description={"Redenção - Parque turístico em Porto Alegre."}
        />
   </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});