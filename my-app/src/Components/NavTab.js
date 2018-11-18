import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

class NavTabs extends React.Component {
  
  render() {
    const { value } = this.props;

    return (
      <NoSsr>
          <AppBar position="static" justify="flex-end">
            <Tabs fullWidth value={value} onChange={this.props.handleChange} color='rgba(0, 0, 0, 0.87)'>
              <LinkTab label="HOME" href="/home/"/>
              <LinkTab label="ABOUT US" href="/aboutus/" />
              <LinkTab label="SERVICES" href="/services/" />
              <LinkTab label="CONTUCT" href="contuct" />
              {this.props.currentUser && <LinkTab label="MY PROFILE" href="personal" style={{background:'black'}} />}
            </Tabs>
          </AppBar>

      </NoSsr>
    );
  }
}


export default NavTabs;
