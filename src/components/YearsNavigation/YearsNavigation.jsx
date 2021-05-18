import React, { useState, useEffect, useRef } from 'react';
import { mapStateToProps, mapDispatchToProps } from './YearsNavigation.index';
import { connect } from 'react-redux';
import { getYearsArray } from '../../utils/utils';
import arrowLeft from '../../assets/img/ArrowLeft.png';
import arrowRight from '../../assets/img/ArrowRight.png';
import './YearsNavigation.scss';


const YearsNavigationPresenter = ({
  activeTheme,
  getEvents,
  setCurrentYear,
  currentYear,
  getCities,
  getBorders
}) => {

  const scrollBlock = useRef();

  const [containerWidth, setConteinerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [years, setYears] = useState([]);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    setYears(activeTheme ? getYearsArray(activeTheme.yearStart, activeTheme.yearEnd) : getYearsArray(2000, 2020));
  }, [activeTheme])

  useEffect(() => {
    activeTheme && getEvents({ themeId: activeTheme._id, currentYear });
  }, [activeTheme, currentYear]);

  useEffect(() => {
    if (scrollBlock) {
      setConteinerWidth(scrollBlock.current.clientWidth);
    }
  }, [scrollBlock.current?.clientWidth]);

  useEffect(() => {
    if (currentYear) {
      getCities(currentYear);
      getBorders(currentYear);
    }
  }, [currentYear])

  useEffect(() => {
    if (containerWidth >= 1100 && years.length >= 15) setItemsCount(15);
    else if (containerWidth >= 1100 && years.length < 15) setItemsCount(years.length);

    else if (containerWidth < 1100 && containerWidth >= 700) setItemsCount(10);
    else if (containerWidth < 1100 && containerWidth >= 700 && years.length < 10) setItemsCount(years.length);

    else if (containerWidth < 700) setItemsCount(5);
    else if (containerWidth < 700 && years.length < 5) setItemsCount(years.length);

  }, [containerWidth, activeTheme, years])

  useEffect(() => {
    setItemWidth(scrollBlock.current.clientWidth / itemsCount);
  }, [itemsCount])

  useEffect(() => {
    if (years.includes(new Date().getFullYear())) {
      const timeoutId = setTimeout(() => onScroll(10000), 0);
      return () =>  clearTimeout(timeoutId);
    }
    else {
      scrollBlock.current.scrollLeft = 0;
      console.log('else');
    }
  }, [years, activeTheme])

  const onScroll = (scroll) => {
    scrollBlock.current.scrollLeft += scroll;
  }

  const onSetCurrentYear = (year) => {
    setCurrentYear(year);
    
  }

  return (
    <div className='YearsNavigation'>
      <div style={{width: `${containerWidth + 20}px`}} className='YearsNavigation-Line' />

      <img onClick={() => onScroll(-containerWidth)} className='YearsNavigation-Left' src={arrowLeft} />
      
      <div ref={scrollBlock} className='YearsNavigation-Wrapper'>
        
        {years.map((year, idx) => {
          return (
            <div style={{minWidth: `${itemWidth}px`}} className='YearsNavigation-Item'>
              <div onClick={() => onSetCurrentYear(year)} key={`circle-${year}`} className={`YearsNavigation-Item-Circle ${currentYear === year ? 'active' : ''}`}>
                <div className='YearsNavigation-Item-Year' key={`year-${year}`}>
                  {year}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <img onClick={() => onScroll(containerWidth)} className='YearsNavigation-Right' src={arrowRight} />

    </div>
  )
}

export const YearsNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(YearsNavigationPresenter);