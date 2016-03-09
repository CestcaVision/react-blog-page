import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { SelectableContainerEnhance } from'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

class AppLeftNav extends Component {
  constructor(props, context) {
    super(props,context);
    this.state = {
      open: false,
      selectedIndex: '/home'
    };
  }

  render() {
    return (
      <LeftNav open={this.state.open}
        docked={false}
        onRequestChange={open => this.setState({open})}>
        <SelectableList valueLink={{
          value: this.state.selectedIndex,
        requestChange: this.handleUpdateSelectedIndex.bind(this)}}>
          <ListItem value='/home' primaryText="HOME"  />
          <ListItem value='/about' primaryText="ABOUT" />
          <ListItem value='/contact' primaryText="CONTACT"/>
        </SelectableList>
      </LeftNav>
    );
  }
  handleUpdateSelectedIndex(e, index) {
  this.context.router.push(index);
  this.setState({
    open: false,
    selectedIndex: index,
  });
}
  handleToggle() {
    this.setState({open: !this.state.open});
  }


}
AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default AppLeftNav;
