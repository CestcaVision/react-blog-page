import React, {Component} from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class Navbar extends Component {
  constructor(props, context) {
    super(props,context);
    this.state={value:'/home'}
  }
  componentWillMount(){
    this.setState({
      value:this._getSelectedIndex()
    })
  }
  componentWillReceiveProps(){
    this.setState({
      value:this._getSelectedIndex()
    })
  }
  _getSelectedIndex(){
    return this.context.router.isActive('/home')?'/home':
    this.context.router.isActive('/about')?'/about':
    this.context.router.isActive('/contact')?'/contact':'/home';
  }
  handleChange (value) {
    this.context.router.push(value);
  }
  render(){
    return (
      <div className="app-header">
        <Tabs tabItemContainerStyle={{background:'#8BC34A'}} inkBarStyle={{background: '#FF5722',height:'4px',marginTop:'-4px'}} value={this.state.value} onChange={this.handleChange.bind(this)}>
          <Tab value='/home' label="HOME"/>
          <Tab value='/about' label="ABOUT"/>
          <Tab value='/contact' label="CONTACT"/>
        </Tabs>
      </div>
        )
  }
}
Navbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default Navbar
