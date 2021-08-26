import React from 'react'
import './Toggle.css'
 class Toggle extends React.Component {
   render(){
     return (
          <div className="DrawerToggle" onClick={this.props.toggle}>
          <div></div>
          <div></div>
          <div></div>
          </div>
     )
    }   
}
export default Toggle;