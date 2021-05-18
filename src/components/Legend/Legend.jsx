import React, { useState, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from './Legend.index';
import { connect } from 'react-redux';
import './Legend.scss';
import LegendImg from '../../assets/img/Legend.png';
import ArrowLeft from '../../assets/img/ArrowLeft.png';
import ArrowRight from '../../assets/img/ArrowRight.png';
import { ReactSVG } from 'react-svg';
import { eventIcons, PAST_EVENTS } from '../../utils/constants';
// import Checkbox from '@material-ui/core/Checkbox';

const LegendPresenter = ({
  legend,
  excludedTypes,
  exludeLegendType
}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={`Legend ${open && 'Legend-open'} ${!legend?.length && 'Legend-nodata'}`}>
      <div className='Legend-Title'>
        <img src={LegendImg} />
        <span>Легенда</span>
      </div>

      <div className='Legend-Content'>

        {!!legend && legend.map(legendGroup =>
          <div>
            {!!legendGroup.name && <div style={{ visibility: open ? 'visible' : 'hidden' }} className='Legend-Content-Group'>{legendGroup.name}</div>}
            {legendGroup.items.map(item => (
            <div className='Legend-Content-Item'>
              <ReactSVG
                className='Legend-Content-Item-Icon'
                style={{ fill: excludedTypes.includes(item.value) ? '#787878' : item.iconColor }}
                src={eventIcons[item.iconType]}
                beforeInjection={(svg) => {
                  svg.classList.add('svg-class-name')
                  svg.setAttribute('style', 'width: 20px; height: 20px')
                }}
                onClick={() => exludeLegendType(item.value)}
              />

              <span>
                {item.title}
              </span>
            </div>
          ))}
          </div>
        )}

        <div>
        <div className='Legend-Content-Item checkbox'>
          <input type='checkbox' checked={excludedTypes.includes(PAST_EVENTS)} onChange={() => exludeLegendType(PAST_EVENTS) } />
          <span>Отображать прошедшие события</span>
        </div>
        </div>

      </div>

      <div className='Legend-Toggle' onClick={() => setOpen(!open)}>
        <img src={open ? ArrowRight : ArrowLeft} />
        {open && <span>Свернуть</span>}
      </div>
    </div>
  )
}

export const Legend = connect(
  mapStateToProps,
  mapDispatchToProps
)(LegendPresenter);