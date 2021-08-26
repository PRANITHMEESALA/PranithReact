import React from 'react'
import './Sliderdrawer.css'
import Selection from  '../DropDown/Selected'
 class SlideDrawer extends React.Component {
   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
       return(
   
          <div className={drawerClasses}>
             <Selection/>
          </div>
)
    }
}
export default SlideDrawer;