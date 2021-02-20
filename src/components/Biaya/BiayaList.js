import React from 'react';
import {FlatList} from 'react-native';
import ItemEmpty from '../Item';
import Item from './ItemBiaya';

const renderItem = ({item}) => <Item data={item} />;

const BiayaList = (Props) => {
  const data = React.useMemo(() => Props.data, [Props.data]);
  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <ItemEmpty
            title="Tidak ada data"
            wrapper={{alignItems: 'center', justifyContent: 'center'}}
          />
        )}
      />
    </>
  );
};

export default BiayaList;
