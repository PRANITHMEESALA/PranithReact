import React from 'react';
import BurgerLogo from '../../assets/Images/burgerlogo.png';
import Styles from '../Logo/Logo.module.css';
const logo =(props)=>(
    <div className={Styles.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt="BurgerLogo"/>
    </div>
);
export default logo;