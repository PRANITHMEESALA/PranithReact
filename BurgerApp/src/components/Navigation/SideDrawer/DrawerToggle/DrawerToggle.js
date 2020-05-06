import React from 'react';
import Styles from '../DrawerToggle/DrawerToggle.module.css';
const drawerToggle =(props)=>{
    return(
    <div className={Styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
        </div>
    );

}
export default drawerToggle;