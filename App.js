import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Cidade1 from './mapa1/santamaria'
import Cidade2 from './mapa2/portoalegre'
import Cidade3 from './mapa3/pelotas'
import Cidade4 from './mapa4/cambara'

function HomeScreen({ navigation }) {
return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button
  onPress={() => navigation.navigate('Home')}
  title="Go home"
  />
  </View>
  );
}

function Jardim({ navigation }) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button onPress={() => navigation.goBack()} title="Go back home" />
  <Cidade1></Cidade1>
  </View>
  );
}

function Parque({ navigation }) { 
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Button onPress={() => navigation.goBack()} title="Go back home" />
<Cidade2></Cidade2>
</View>
    );
}

  function Museu({ navigation }) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button onPress={() => navigation.goBack()} title="Go back home" />
  <Cidade3></Cidade3>
    </View>
    );
}

  function Canion({ navigation }) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button onPress={() => navigation.goBack()} title="Go back home" />
  <Cidade4></Cidade4>
  </View>
  );
}

  const Drawer = createDrawerNavigator();

  export default function App() {
  return (
  <NavigationContainer>
  <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Cidades Gaúchas" component={HomeScreen} />
  <Drawer.Screen name="Santa Maria" component={Jardim} />
  <Drawer.Screen name="Porto Alegre" component={Parque} />
  <Drawer.Screen name="Pelotas" component={Museu} />
  <Drawer.Screen name="Cambará do Sul" component={Canion} />
  </Drawer.Navigator>
  </NavigationContainer>
  );
}

