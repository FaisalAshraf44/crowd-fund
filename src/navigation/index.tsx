import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import InvestorProfile from '../screens/InvestorProfile';
import CustomDrawerContent from '../components/CustomDrawerContent';
import {Dimensions} from 'react-native';
import NavigationHeader from '../components/NavigationHeader';
import {COLORS} from '../constants';

const Navigation = () => {
  const Drawer = createDrawerNavigator();

  const MainDrawer = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: COLORS.white,
          drawerActiveTintColor: COLORS.darkGray,
          drawerInactiveTintColor: COLORS.darkGray,
          drawerStyle: {
            flex: 1,
            width: Dimensions.get('window').width,
          },
          overlayColor: 'transparent',
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: props => <NavigationHeader {...props} />,
          }}
        />
        <Drawer.Screen name="InvestorProfile" component={InvestorProfile} />
      </Drawer.Navigator>
    );
  };

  return <NavigationContainer>{MainDrawer()}</NavigationContainer>;
};

export default Navigation;
