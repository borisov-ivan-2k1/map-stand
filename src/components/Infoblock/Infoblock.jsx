import React, { useRef, useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps } from './Infoblock.index';
import { connect } from 'react-redux';
import { infoblockToggler } from './InfoblockToggler';
import './Infoblock.scss';
import './events.scss';
import './events-screens.scss';

const InfoblockPresenter = ({
  events,
  activeEvent,
  setActiveEvent,
  activeTheme,
  infoblocksIds,
  infoblocks,
  setInfoblockId,
  infoblockId,
  closeInfoblock,
}) => {

  const scrollBlock = useRef();

  useEffect(() => {
    if (scrollBlock.current) scrollBlock.current.scrollLeft += 300;
  }, [infoblocksIds])

  if (!infoblockId) return null;

  return (
    <div className='Infoblock'>
      <div ref={scrollBlock} className='Infoblock-Tabs'>
        {infoblocksIds.map((id, idx) => (
          <div style={{ zIndex: 99 - idx }} className={`Infoblock-Tabs-Item ${infoblockId === infoblocks[id]._id ? 'active' : ''}`} onClick={() => setInfoblockId(id)}>
            <div className='Infoblock-Tabs-Item-Title' >{infoblocks[id].title}</div>
            {idx > 0 && <div
              className='Infoblock-Tabs-Item-Close'
              onClick={(e) => {
                e.stopPropagation();
                const prevId = infoblocksIds[idx - 1] || infoblocksIds[1];
                if (id === infoblockId) setInfoblockId(prevId);
                closeInfoblock(id);
              }}>
              x
            </div>}
          </div>
        ))}
      </div>
      
      <div className='Infoblock-Content' id='infoblock'>
        {infoblockToggler[infoblocks[infoblockId].type]}
        {/* <div dangerouslySetInnerHTML={{ __html: infoblocks[infoblockId].description }} /> : */}
      </div>
    </div>
  )
}

export const Infoblock = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoblockPresenter);
