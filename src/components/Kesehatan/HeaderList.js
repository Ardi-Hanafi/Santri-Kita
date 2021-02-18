import React from 'react';
import Title from '../Title';
import FilterKesehatan from './FilterKesehatan';

export default HeaderList = (Props) => {
  return (
    <>
      <Title backRoute="Home" title="Riwayat Kesehatan" />
      <FilterKesehatan />
    </>
  );
};
