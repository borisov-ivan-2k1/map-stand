import React, { useEffect, useState } from 'react';
import { getImages } from '../../utils/requests/admin.api';
import './ImageSelector.scss';

export const ImageSelector = ({
  value,
  onChange,
  type,
}) => {

  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  const onGetImages = async () => {
    const response = await getImages(value, type);
    setItems(response.data);
  }

  useEffect(() => {
    onGetImages();
  }, [value])

  return (
    <div className={'ImageSelector'}>
      <input
        className={'ImageSelector-Input'}
        value={value}
        onChange={e => onChange(e.target.value)}
        onClick={e => setShowItems(true)}
      />
      <span onClick={() => setShowItems(false)} className={'ImageSelector-InputClose'}>{showItems ? '^' : 'v'}</span>
      <span onClick={() => onChange('')} className={'ImageSelector-InputClear'}>x</span>
      {!!showItems && <div className={'ImageSelector-Items'}>
        {items.map(img => (
          <div onClick={() => {
            onChange(img.url);
            setShowItems(false);
          }}>
            <span>{img.name}</span>
            <img className={'ImageSelector-Items-Img'} src={img.url} />
          </div>
        ))}
      </div>}
    </div>
  )
}