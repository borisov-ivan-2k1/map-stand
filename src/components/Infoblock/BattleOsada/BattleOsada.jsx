import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './BattleOsada.index';
import { outcomeTypes } from '../../../utils/constants';
import { connect } from 'react-redux';
import './BattleOsada.scss';

const BattleOsadaPresenter = ({ data }) => {

  const [f, s] = data.data;

  const getOutcomeColor = (outcomeType) => {
    if (outcomeType === '1') return 'color-green';
    if (outcomeType === '0') return 'color-gray';
    if (outcomeType === '-1') return 'color-red';
  }

  const isAllyExists = f.allyName && s.allyName;

  return (
    <div className='event'>
      <div className='title mb-xl text-center'>
        <span className='text-xl'>
          {data.title}
      </span>
        <br />
        <span className="color-red text-m">
          {data.date}
      </span>
      </div>

      <div className='content'>

        <div className="event-block">
          <div className="event-block-left">
            <img className="img-h-s mb-m" src={f.opponentImgUrl} />
            <span className="text-s text-center">{f.opponentName}</span>
          </div>
          <div className="event-block-center text-l text-center item-v-center">Противники</div>
          <div className="event-block-right">
            <img className="img-h-s mb-m" src={s.opponentImgUrl} />
            <span className="text-s text-center">{s.opponentName}</span>
          </div>
        </div>

        {isAllyExists && <div className="event-block">
          <div className="event-block-left">
            <img className="img-h-s mb-m" src={f.allyImgUrl} />
            <span className="text-s text-center">{f.allyName}</span>
          </div>
          <div className="event-block-center text-l text-center item-v-center">Союзники</div>
          <div className="event-block-right">
            <img className="img-h-s mb-m" src={s.allyImgUrl} />
            <span className="text-s text-center">{s.allyName}</span>
          </div>
        </div>}

        <div className="event-block">
          <div className="event-block-left">
            <img className="img-s mb-m" src={f.commanderImgUrl} />
            <span className="text-s text-center">{f.commanderName}</span>
          </div>
          <div className="event-block-center text-l text-center item-v-center">Главно&shy;командующие</div>
          <div className="event-block-right">
            <img className="img-s  mb-m" src={s.commanderImgUrl} />
            <span className="text-s text-center">{s.commanderName}</span>
          </div>
        </div>

        <div className="event-block">
          <div className="event-block-left">
            <div className="text-s mb-s text-center">{f.strength}</div>
          </div>
          <div className="event-block-center text-l text-cente item-v-center">Силы сторон</div>
          <div className="event-block-right">
            <div className="text-s mb-s" >{s.strength}</div>
          </div>
        </div>

        <div className="event-block">
          <div className="event-block-left">
            <div className="text-s text-center">{f.losses}</div>
          </div>
          <div className="event-block-center text-l text-center item-v-center">Потери</div>
          <div className="event-block-right">
            <div className="text-s text-center">{s.losses}</div>
          </div>
        </div>

        <div className="event-block">
          <div className="event-block-left">
            <span className={`text-m text-center ${getOutcomeColor(f.outcome.toString())}`}>{outcomeTypes.find(el => el.value.toString() === f.outcome.toString())?.title}</span>
          </div>
          <div className="event-block-center text-l text-center item-v-center">Итоги битвы</div>
          <div className={`event-block-right text-center ${getOutcomeColor(s.outcome.toString())}`}>
            <span className="text-m">{outcomeTypes.find(el => el.value.toString() === s.outcome.toString())?.title}</span>
          </div>
        </div>
      </div>

    </div>
  )
}


export const BattleOsada = connect(mapStateToProps, mapDispatchToProps)(BattleOsadaPresenter);
