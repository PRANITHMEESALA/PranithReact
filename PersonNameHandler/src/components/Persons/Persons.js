import React,{Component} from 'react'
import Person from './Person/Person'
class Persons extends Component{
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside the constructor',props);
    this.lastPersonRef = React.createRef();
   
  }
  componentWillMount(){
    console.log('[Persons.js] Inside the componentwillmount()');
  }
  componentDidMount(){
    console.log('[Persons.js] Inside the componentDidmount()');
  }
  componentWillReceiveProps( nextProps){
    console.log('[Update Persons.js] inside the componentWillRecieveProps()');
}
/* shouldComponentUpdate(nextProps, nextState){
   console.log('[Update Persons.js] Inside the shouldComponentUpdate',nextProps,nextState);
    return nextProps.persons == this.props.persons ||
          nextProps.changed == this.props.changed ||
          nextProps.click == this.props.click;
  } */
  componentWillUpdate(nextProps,nextState){
    console.log('[Update Persons.js] Inside the ComponentWillUpdate',nextProps,nextState);
  }
  componentDidUpdate(){
    console.log('[Update Persons.js] Inside the ComponentDidUpdate');
  }
  render(){
    console.log('[Persons.js] Inside the Rendermethod()');
      return this.props.persons.map((person,index) =>{
        return <Person click={() =>this.props.click(index)} 
        name={person.name}
        position={index}
        Age={person.Age}
        ref={this.lastPersonRef}
       
        key={person.id}
        changed={(event)=>this.props.changed(event,person.id)}
        />
      });
  }
}
export default Persons