import {DrawerHeaderProps} from '@react-navigation/drawer';
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';
import {HamburgerIcon, Logo, NotificationsIcon} from '../../icons';

const NavigationHeader = (props: DrawerHeaderProps) => {
  const {
    navigation: {openDrawer},
    ...rest
  } = props;
  return (
    <View {...rest} style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={() => openDrawer()}>
          <HamburgerIcon style={{color: COLORS.blue}} />
        </TouchableOpacity>
        <View style={{marginLeft: 20}}>
          <Logo />
        </View>
      </View>
      <TouchableOpacity>
        <NotificationsIcon />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    height: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
