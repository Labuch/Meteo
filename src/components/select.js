import React from 'react';
import cities from '../constantes/cities-fr.json';

export const Select = (props) => {
  const { onChange } = props;

  return (
    <select onChange={onChange} >
      {cities.map(ele => <option value={ele.id} key={ele.id}>{ele.nm}</option>)}
    </select>
  );
};
