import React from 'react';

export const Dropdown = ({
  items,
  value,
  onChange
}) => {

  return (
    <select onChange={e => onChange(e.currentTarget.value)}>
      <option selected={!value} disabled value=''>Выберите элемент</option>
      {items.map(item => (
        <option selected={value === item.value} value={item.value}>{item.title}</option>
      ))}
    </select>
  )
}