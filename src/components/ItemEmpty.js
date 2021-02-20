import React from 'react';
import Item from './Item';

export default ItemEmpty = () => {
  return (
    <Item
      title="Tidak ada data"
      wrapper={{alignItems: 'center', justifyContent: 'center'}}
    />
  );
};
