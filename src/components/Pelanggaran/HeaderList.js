import React from 'react';
import Title from '../Title';
import FilterPelanggaran from './FilterPelanggaran';

export default HeaderList = () => {
  return (
    <>
      <Title backRoute="Home" title="Riwayat Pelanggaran" />
      <FilterPelanggaran />
    </>
  );
};
