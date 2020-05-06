import React from 'react'
import Styles from '../Cockpit.module.css';
import Auxi from '../../hoc/Auxi';
const cockpit=(props)=>{
    const classes = [];
    let btnClass=Styles.Button;
    if(props.showPersons){
        btnClass =[Styles.Button, Styles.Red].join(' ');
    }
      
    if(props.persons.length <=2){
      classes.push(Styles.red);
    }
    if(props.persons.length <=1){
      classes.push(Styles.bold);
    }
  return(
      <Auxi>
        <h1>{props.appTitle}</h1>
    <p className={classes.join( ' ' )}> This is working </p>
     <button
      className={btnClass}
      onClick={props.click}>Toggle Persons</button>
      <button onClick={props.login}> log in </button>      
      </Auxi>
  );
};
export default cockpit;
