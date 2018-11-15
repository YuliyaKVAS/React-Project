import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import HomeContent from './HomeContent';
import AboutUsContent from './AboutUsContent';
import ContactContent from './ContactContent';
import PriceTable from './PriceTable';
import MyProfile from './MyProfile';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class DefineContent extends React.Component{
  render(){
    const value = this.props.value;
    if(value===0){
      return <HomeContent />
    }
    if(value===1){
      return <AboutUsContent />
    }
    if(value===2){
      return <PriceTable />
    }
    if(value===3){
      return <ContactContent />
    }
    if(value===4){
      return <MyProfile />
    }
  }
}

export default DefineContent;
