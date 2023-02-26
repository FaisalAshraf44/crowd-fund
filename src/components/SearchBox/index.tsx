import * as React from 'react';
import {Text, View, StyleSheet, TextInput, ViewStyle} from 'react-native';
import {COLORS} from '../../constants';
import {SearchIcon} from '../../icons';

interface SearchBoxProps {
  customStyles?: ViewStyle;
}

const SearchBox = ({customStyles}: SearchBoxProps) => {
  return (
    <View style={[styles.container, customStyles]}>
      <SearchIcon />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.lightGray,
    height: 46,
    width: '100%',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
});
