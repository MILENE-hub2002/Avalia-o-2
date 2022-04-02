import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion = {{ 
        latitude : -29.7189997,
        longitude : -53.7316473, 
        latitudeDelta : 0.0922, 
        longitudeDelta : 0.0421,
      }}
    >
      <MapView.Marker
      coordinate={{
          latitude: -29.7189997,
          longitude: -53.7316473}}
        title={"Jardim Botânico"}
        description={"Ponto turístico em Santa Maria."}
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