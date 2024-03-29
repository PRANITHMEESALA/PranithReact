import React, { PureComponent } from 'react';
import Styles from '../App.module.css';
import Persons from '../components/Persons/Persons';

import Position from '../components/Position'
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi';
import withClass from '../hoc/withClass';




export const AuthContext= React.createContext(false);
class App extends PureComponent {
    constructor(props){
      super(props);
      console.log('[App.js] Inside the constructor',props);
      this.state ={
        persons: [
          { id:'jfjkfd',name:'Pranith', Age: 25 },
          { id:'ifno0',name:'Afroz', Age: 24 },
          {id:'jfo0',name:'SP', Age: 23 }
           
        ],
        
        showPersons:false,
        toggledClicked:0,
        authenticated:false

      }
      
    }
    componentWillMount(){
      console.log('[App.js] Inside the componentwillmount()');
    }
    componentDidMount(){
      console.log('[App.js] Inside the componentDidmount()');
    }
    componentWillReceiveProps( nextProps){
      console.log('[Update App.js] inside the componentWillRecieveProps()');
  }
  shouldComponentUpdate(nextProps, nextState){
      console.log('[Update App.js] Inside the shouldComponentUpdate',nextProps,nextState);
       return true;
     } 
     componentWillUpdate(nextProps,nextState){
       console.log('[Update App.js] Inside the ComponentWillUpdate',nextProps,nextState);
     }
     getDerivedStateFromProps(nextProps,prevState){
      console.log('[Update App.js] Inside the getDerivedStateFromProps',
      nextProps,prevState);
    return prevState;
    }
    getSnapshotBeforeUpdate(){
      console.log(
        "[Update App.js] Inside  getSnapshotBeforeUpdate"
      )
    }
     componentDidUpdate(){
       console.log('[Update App.js] Inside the ComponentDidUpdate');
     }
 /* state ={
    persons: [
      { id:'jfjkfd',name:'Pranith', Age: 25 },
      { id:'ifno0',name:'Afroz', Age: 24 },
      {id:'jfo0',name:'SP', Age: 23 }
       
    ],
    showPersons:false
  }
   */
   

   deletePersonHandler =(personindex) =>{
     const persons = this.state.persons;
     persons.splice(personindex,1);
     this.setState({persons:persons});   

   }
   nameChangeHandler =(event, id) =>{
   const personindex = this.state.persons.findIndex(p => {
     return p.id === id;
   });
   const person = {
     ...this.state.persons[personindex]
   }
   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personindex] = person;


    this.setState({
      persons: persons});
    }
   
  togglePersonsHandler =() =>{
    const doesShow = this.state.showPersons;
    this.setState((prevState,props)=>{
      return{
      showPersons:!doesShow,
      toggledClicked: prevState.toggledClicked + 1
    }
    });
  }

 loginHandler =() => {
   this.setState({authenticated:true}); 
 }
 render(){
  console.log('[App.js] Inside the render');
  let persons =null;

  if(this.state.showPersons){
    persons= <Persons 
        persons={this.state.persons}
        click={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />;
   
    }
  //  let classes=['red','bold'].join(' ');
    

    return (
   
         <Auxi> 
           
           {this.props.authenticated ? <p>Iam authenticated!</p>:null}
            <button  onClick={() =>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit
          appTitle={this.props.title}
           showPersons={this.state.showPersons}
          
           persons={this.state.persons}
           login={this.loginHandler}
           click={this.togglePersonsHandler}/>
          <AuthContext.Provider value={this.state.authenticated} >{persons}</AuthContext.Provider>
       
     
      
          </Auxi>
        
    );
  }
}
export default withClass(App,Styles.App) ;
