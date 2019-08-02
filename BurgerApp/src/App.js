import React, { Component } from 'react';
import axios from 'axios';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';



import EmployeeDetails from './components/GetData/EmployeeDetails';


class App extends Component {
    state={
        emp:[],
       
        Stops:["A","B","C","D"],
       
       
    }

    /*NextStophandler=()=>{
 let a=this.Stops[0]="Z";
setInterval(function() {
    var rand = Math.floor(Math.random() * 4);
  
    a= this.Stops[rand];
   
    }, 200);
    this.setState({letus:a});

          
    }
   */

    componentDidMount(){
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(resp => {
            this.setState({emp:resp.data} );
         // console.log(resp);  
        });
        
      }
      
    
      
       render () {
           const emp = this.state.emp.map(emp =>{
               return <EmployeeDetails key={emp.id} id={emp.id} employee_name={emp.employee_name} employee_salary={emp.employee_salary} employee_age={emp.employee_age}/>;
           })
           return (
               <div>
                  
                   <Layout />
                   <BurgerBuilder/><br/><br/><br/><br/><br/><br/><br/><br/>
                 
                   
                   {emp}
                   
                  
               </div>
           );
       }
     }
     

  export default App;
