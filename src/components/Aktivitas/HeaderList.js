import React from 'react';
import DateFilter from './DateFilter';
import Title from '../../components/Title';
const handleCallback = (_date, _startDate, _endDate) => {
  console.log([
    _startDate.format('YYYY-MM-DD'),
    _endDate.format('YYYY-MM-DD'),
    _date.format('YYYY-MM-DD'),
  ]);
};

export default HeaderList = () => {
  return (
    <>
      <Title backRoute="Home" title="Aktivitas" />
      <DateFilter parentCallback={handleCallback} />
    </>
  );
};
