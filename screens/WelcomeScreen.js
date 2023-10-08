import { useContext,  } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StyleSheet} from 'react-native';
import { AuthContext } from '../store/auth-context';
import AllPlaces from './App/AllPlaces';
import AddPlace from './App/AddPlace';
import IconButton from '../components/ui/IconButton';

function WelcomeScreen() {

  const authCtx = useContext(AuthContext);


  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: '#1AACAC' }}>
      <Tab.Screen name="All" component={AllPlaces} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="list-circle" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Add" component={AddPlace} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <IconButton icon="add-circle" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({});

