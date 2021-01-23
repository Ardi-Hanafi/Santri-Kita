import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import icon from '';
import moment from 'moment';

export default DateFilter = (Props) => {
  const [number, setNumber] = useState(0);

  let date = moment(new Date()).subtract(-number, 'month');

  let startDate = moment(new Date())
    // .subtract(-number * 7, 'days')
    .startOf('month');

  let endDate = moment(new Date())
    // .subtract(-number * 7, 'days')
    .endOf('month');

  let numWeek = Math.ceil(date.date() / 7);
  let formated = date.format('MMMM YYYY');

  useEffect(() => {
    Props.parentCallback(date, startDate, endDate);
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setNumber(number - 1);
        }}
        style={styles.button}>
        <Icon name="chevron-back" size={20} color='#10B981' />
      </TouchableOpacity>
      <View style={styles.label}>
        <Text>{formated}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setNumber(number + 1);
        }}
        style={styles.button}>
        <Icon name="chevron-forward" size={20} color='#10B981' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#10B981',
    borderRadius: 8,
    overflow: 'hidden'
  },
  button: {
    // borderWidth: 1,
    borderColor: '#10B981',
    // borderRadius: 8,
    width: 50,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#10B981',
  },
  label: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
