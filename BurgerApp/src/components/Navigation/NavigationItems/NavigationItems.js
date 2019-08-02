import React from 'react';
import Styles from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
const navigationitems=()=>(
    <ul className={Styles.NavigationItems}>
       <NavigationItem link="/" active>
           Burger Builder
       </NavigationItem>
       <NavigationItem link ="/">Checkout</NavigationItem>
    </ul>
);
export default navigationitems;