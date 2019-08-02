import React from 'react';
import Styles from '../NavigationItem/NavigationItem.module.css';
const navigationitem=(props)=>(
    <ul className={Styles.NavigationItem}>
        <li><a 
        href={props.link}
           className={props.active ? Styles.active:null}>{props.children}</a></li>
    </ul>
);
export default navigationitem;