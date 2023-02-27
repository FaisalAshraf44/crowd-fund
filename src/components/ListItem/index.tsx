import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

interface ListItemProps {
  label: string;
  icon: React.ReactNode;
  value?: number;
}

const ListItem = ({label, icon, value}: ListItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
      {value && (
        <View style={styles.valueLabel}>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      )}
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
  valueLabel: {
    width: 24,
    height: 22,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueText: {
    ...FONTS.body5,
    fontSize: 10,
    lineHeight: 14,
    color: '#9C9C9C',
  },
});
