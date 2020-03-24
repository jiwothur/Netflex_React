import React, { Component } from 'react'
import Header from './../components/Header';
import TabComponent from './../components/TabComponent';
import TabContentOne from '../components/TabContentOne';

class Main extends Component {

 render() {
  return (
    <div>
      <Header />
      <TabComponent />
    </div>
   )
  }
 }

export default Main