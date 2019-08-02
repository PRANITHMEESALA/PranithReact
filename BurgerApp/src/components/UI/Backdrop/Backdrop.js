import React from 'react';
import Styles from '../Backdrop/Backdrop.module.css';
const backdrop =(props)=>{
    return(
props.show ? <div className={Styles.Backdrop} onClick={props.clicked}></div> :null
    );
}
export default backdrop;    