import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {ArrowDownIcon} from '../../icons';

interface FilterButtonProps {
  label: string;
  icon: React.ReactNode;
}

const FilterButton = ({label, icon}: FilterButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.label}>{label}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...FONTS.body5,
    color: '#797979',
    marginRight: 8,
  },
});
