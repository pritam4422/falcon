import React from 'react';
import * as Icon from 'react-feather';
import { changeTheme } from '../utils';

export default function Header(props: { title: string }) {
  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <div className='toolbar'>
        <div className='search-box'>
          <Icon.Search />
          <input type='text' id='search' placeholder='Search' />
        </div>
        <div className='change-theme' onClick={changeTheme}>
          <div className='icon-theme'></div>
        </div>
      </div>
    </div>
  );
}
