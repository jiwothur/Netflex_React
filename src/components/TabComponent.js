import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import '../css/TabsNav.css';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

class TabComponent extends Component {
  state={
    tabIndex:2
  }
 render() {
  const {tabIndex} = this.state;
  return (
    <div>
      <Tabs className="tabs" selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList className="tab-nav-container"> 
            <Tab className={`${tabIndex===0 ? 'tab-selected active' : null}`}>
              <TabDoor />
              <p style={{marginBottom:'1.875rem'}}><strong>No commitments<br />Cancel online at anytime</strong></p>
            </Tab>
            <Tab className={`${tabIndex===1 ? 'tab-selected active' : null}`}>
              <TabDevices />
              <p style={{marginTop:'-5.3125rem'}}><strong>Watch anywhere</strong></p>
            </Tab>
            <Tab className={`${tabIndex===2 ? 'tab-selected active' : null}`}>
              <TabPrices />
              <p><strong>Pick your price</strong></p>
            </Tab>
        </TabList>
        {/* Tabs Content */}
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
        <TabPanel>
          <TabContentThree />
        </TabPanel>
      </Tabs> 
    </div>
   )
  }
 }

export default TabComponent