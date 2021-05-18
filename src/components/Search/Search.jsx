import React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from './Search,index';
import './Search.scss';
import { connect } from 'react-redux';
import SearchImg from '../../assets/svg/search.svg';
import { useDebouncedCallback } from 'use-debounce';
import { useHistory } from 'react-router-dom';

const SearchPresenter = ({
  search,
  data,
  loading,
  showSearch,
  setSearch,
  getThemes,
  getEvents,
  setThemesLoading,
  setActiveTheme,
  setInfoblocks,
  setInfoblockId,
  clearInfoblockData
}) => {

  const history = useHistory();

  const getData = useDebouncedCallback(getThemes, 1000);

  const onChangeSearch = (e) => {
    !!e.target.value && setThemesLoading(true)
    setSearch(e.target.value);
    getData.callback(e.target.value);
  }

  const onSelectTheme = item => {
    clearInfoblockData();
    setSearch(item.title);
    setActiveTheme(item);
    setInfoblocks(item);
    let params = new URLSearchParams();
    params.append("themeId", item._id);
    history.push({ search: params.toString() });
  }

  return (
    <div className={`Search ${showSearch && !!search && 'active'}`}>
      <img src={SearchImg} className='Search-Btn' />
      <input
        placeholder='Поиск по атласу'
        value={search}
        onChange={onChangeSearch}
      />

      {showSearch && !!search &&
      <div className='Search-Results'>
        {loading ? <div className='Search-Results-Item'>Загрузка...</div> :
        data.length ? data.map(item => (
          <div onClick={() => onSelectTheme(item)} key={item.id} className='Search-Results-Item'>
            <div>{item.title}</div>
            <div>
              {item?.yearStart}
              {!!item.yearEnd && ` - ${item.yearEnd}`}
            </div>
          </div>
        )) :
        <div className='Search-Results-Item'>Ничего не найдено</div>
        }
      </div>
      }
    </div>
  )
}

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPresenter)

