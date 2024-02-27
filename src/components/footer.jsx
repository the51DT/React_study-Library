import React, { Component } from 'react';
import { BrowserRouter, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <BrowserRouter>
        
        <Link href="#">정보1</Link>
        <Link href="#">정보2</Link>
        <Link href="#">정보3</Link>
        </BrowserRouter>
      </div>
    );
  }
}

export default Footer