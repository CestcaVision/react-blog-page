import React , { Component } from 'react';
import Home from './Home';
import Navbar from './shared/Navbar';
import AppBar from 'material-ui/lib/app-bar';
import AppLeftNav from './shared/AppLeftNav';
class App extends Component {
  constructor(props, context) {
    super(props,context);
  }
  componentWillMount(){
    let setNavBarState = function(){
    this.setState({renderNavBar:document.body.clientWidth>700})}.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  }
  render() {
    return (
      <div className='app-wrap'>
        {this.state.renderNavBar?<Navbar/>:this._getAppBar()}
        <AppLeftNav ref="leftNav"/>
        {this.props.children}
        <div className='app-footer'></div>
      </div>
    )
  }
  _onLeftIconButtonTouchTap(){
    this.refs.leftNav.handleToggle()
  }
  _getAppBar(){
    let title = this.context.router.isActive('/home')?'HOME':
    this.context.router.isActive('/about')?'About':
    this.context.router.isActive('/contact')?'Contact':'';
    return <AppBar title={title} onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}/>
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default App;
