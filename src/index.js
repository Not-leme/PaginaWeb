import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Lado from './component/Aside'
import Main from './component/Main'


ReactDOM.render(
  <div className='Page'>
    <Lado/>
    <div className='Principal'>
      <Main/>
    </div>
  </div>
  ,document.getElementById('root'))


