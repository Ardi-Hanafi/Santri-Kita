import React from 'react';
import Title from '../Title';
import FilterBiaya from './FilterBiaya';

export default HeaderListBiaya = (Props) => {
  const {lunas, setLunas, belumLunas, setBelumLunas} = Props;
  return (
    <>
      <Title backRoute="Home" title="Biaya" />
      <FilterBiaya
        lunas={lunas}
        setLunas={setLunas}
        belumLunas={belumLunas}
        setBelumLunas={setBelumLunas}
      />
    </>
  );
};
