import React, {Component} from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
class Navbar extends Component {
  render(){
    return (
      <div className="app-header">
        <Tabs tabItemContainerStyle={{background:'#8BC34A'}} inkBarStyle={{background: '#FF5722',height:'4px',marginTop:'-4px'}}>
          <Tab label="HOME"/>
          <Tab label="ACCOUNT"/>
          <Tab label="ABOUT"/>
        </Tabs>
      </div>
        )
  }
}
export default Navbar
