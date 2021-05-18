import React, { useEffect, useRef, useState } from 'react';
import { Map, Legend, Search, YearsNavigation, Infoblock } from '../../components';
import { animateScroll } from 'react-scroll';
import { mapStateToProps, mapDispatchToProps } from './MapPage.index';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import './MapPage.scss';

const MapPagePresenter = ({ infoblockId, initMap }) => {

  let location = useLocation();

  useEffect(() => {
    // for mobile browsers
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    initMap(queryString.parse(location.search));
  }, [])

  useEffect(() => {
    if (infoblockId) animateScroll.scrollTo(820); // map height
  }, [infoblockId])

  return (
    <div className='MapPage'>
      <div className='MapPage-Map'>
        <Search />
        <Map />
        <Legend />
      </div>
      <div className='MapPage-YearsNavigation'>
        <YearsNavigation />
      </div>
      <div className='MapPage-Infoblock'>
        <Infoblock />
      </div>
    </div>
  )
}

export const MapPage = connect
  (mapStateToProps, mapDispatchToProps)(MapPagePresenter)
