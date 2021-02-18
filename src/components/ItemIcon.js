import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ItemIcon = ({title, date,icon}) => (
  <View style={styles.container}>
    <View style={styles.leftSide}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.date}>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: theme.colors.gray1,
    borderRadius: 8,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: theme.colors.gray5,
  },
  date: {
    color: theme.colors.gray4,
  },
});
