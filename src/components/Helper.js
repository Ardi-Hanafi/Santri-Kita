import React from 'react';

export const moneySeparator = (money) => {
  return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
};

export const DateFormat = (dt) => {
  const date = new Date(dt);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

// digunakan sementara sampai update database
// digunakan pada file SilabusScreen
export const filter = (data)=> {
  // wadah kunci unik
  let distinct = [];
  // menampung data sebagai keluaran
  let result = [];

  for (let i = 0; i < data.length; i++) {
    const p = data[i].pelajaran;

    // cek pelajaran ada di array distict
    if (!distinct.includes(p)) {
      // menambahkan pelajaran ke array distinct supaya tidak duplikat
      distinct.push(p);
      // tambah disini unutuk element yang unik
      result.push({
        pelajaran: p,
      });
      // menset data sebagai array agar bisa diisi
      result[distinct.indexOf(p)]['data'] = [];
    }
    // menambahkan data ke element data pada result
    result[distinct.indexOf(p)]['data'].push(data[i]);
  }
  return result;
}