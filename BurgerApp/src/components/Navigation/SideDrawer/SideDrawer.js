import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Styles from '../SideDrawer/SideDrawer.module.css';
import Aux from '../../../hoc/Auxi/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer =(props)=>{
    
        let attachedClasses = [Styles.SideDrawer, Styles.Close];
        if (props.open) {
            attachedClasses = [Styles.SideDrawer, Styles.Open];
        } 
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={Styles.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );
}
export default sideDrawer;