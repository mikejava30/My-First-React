import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Toolbar from './Navigation/Toolbar/Toolbar';
import Sidebar from './Navigation/Sidebar/Sidebar';

class Layout extends Component {
  state = {
    showSidebar: false
  }

  closeSidebarHandler = () => {
    this.setState({showSidebar: false})
  }

  toggleSidebarHandler = () => {
    this.setState((prevState) => {
      return {showSidebar: !prevState.showSidebar};
    } );
  };

  render () {
    return (
      <Auxiliary>
      <Toolbar toggleDrawer={this.toggleSidebarHandler} />
        <Sidebar
          open={this.state.showSidebar}
          closed={this.closeSidebarHandler} />
        <main style={{'margin': '72px'}}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  };
};


export default Layout;
