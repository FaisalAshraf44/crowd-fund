import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {COLORS, DrawerList, FONTS} from '../../constants';
import {profile} from '../../assets/images';
import Divider from '../Divider';
import {CloseIcon, Logo, LogoText} from '../../icons';
import ListItem from '../ListItem';

const CustomDrawerContent = ({
  navigation,
}: {
  navigation: DrawerNavigationHelpers;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <Logo />
          <View style={styles.logoTextContainer}>
            <LogoText />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <CloseIcon style={{height: 14, width: 14, color: COLORS.black}} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={profile} style={styles.imageStyle} />
        <Text style={styles.name}>Cameron Williamson</Text>
        <Text style={styles.designation}>Co-Founder at ZeeBrooks</Text>
      </View>

      <Divider />

      {/* LIST_OF_SCREEN */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 24}}>
          {DrawerList.map((item, index) => {
            return (
              <View key={`drawerContent${index}`}>
                <ListItem
                  label={item.label}
                  icon={item.icon}
                  value={item.value}
                />
                {index === 4 ? (
                  <View style={{paddingVertical: 24}}>
                    <Divider />
                  </View>
                ) : null}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoTextContainer: {
    paddingLeft: 12,
    marginTop: 2,
  },
  profileContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  name: {
    ...FONTS.h3,
    marginTop: 16,
  },
  designation: {
    ...FONTS.body5,
    marginTop: 4,
  },
});
