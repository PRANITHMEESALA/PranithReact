import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Styles from '../Person/Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import {AuthContext} from '../../../containers/App';
class Person extends Component {
 /*   const personstyle ={
            '@media (min-width: 500px )': {
                width: '500px'
            }

    }; */
    constructor(props){
        super(props);
        console.log('[Person.js] Inside the constructor',props);
        this.inputElement = React.createRef();
       
      }
      componentWillMount(){
        console.log('[Person.js] Inside the componentwillmount()');
      }
      componentDidMount(){
        console.log('[Person.js] Inside the componentDidmount()');
        if ( this.props.position === 0 ) {
          this.inputElement.current.focus();
      }
  }

  focus() {
      this.inputElement.current.focus();
  }
     
    render(){
         console.log('[Person.js] Inside the rendermethod()');
        return (
       
            <Aux>
              <AuthContext.Consumer>
              {auth => auth ? <p> I'm authenticated </p> : null}
              </AuthContext.Consumer>
            
            <p  onClick={this.props.click}> Im a {this.props.name} and my age is {this.props.Age}  </p>
            <p>{this.props.children}</p>
            <input 
             ref={this.inputElement}
             type="text" onChange={this.props.changed} value={this.props.name} />
            <title> </title>
            
            </Aux>
        ) 
    }
    }
    Person.propTypes = {
      click: PropTypes.func,
      name: PropTypes.string,
      age: PropTypes.number,
      changed: PropTypes.func 
  };
export default withClass(Person, Styles.Person);
 