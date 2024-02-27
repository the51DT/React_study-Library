import React, { Component } from 'react';
import { BrowserRouter, Route, Routes , Link , NavLink } from "react-router-dom";
import Main from '../pages/main'
import Sub from '../pages/sub'

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='header'>
          <p>Header</p>
          <Link to="/">페이지 불러오기</Link>
          <br />
          <NavLink to="/sub" className={({isActive}) => {
            return isActive ? 'orange' : '';
          }}>서브 페이지 불러오기</NavLink>
        </div>
        <div class="wrap">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header