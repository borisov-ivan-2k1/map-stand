import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './Html.index';
import { outcomeTypes } from '../../../utils/constants';
import { connect } from 'react-redux';
import './Html.scss';

const HtmlPresenter = ({ data }) => {

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

      <div dangerouslySetInnerHTML={{ __html: data.data }} className='content'/>

    </div>
  )
}


export const Html = connect(mapStateToProps, mapDispatchToProps)(HtmlPresenter);
