import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

interface ListItemProps {
  label: string;
  icon: React.ReactNode;
}

const ListItem = ({label, icon}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    ...FONTS.h3,
    color: COLORS.darkGray,
    marginLeft: 14,
  },
  iconContainer: {
    width: 24,
  },
});
