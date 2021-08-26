import React, { Component } from 'react'
import './Main.css'
import DonutChart from 'react-d3-donut'
import{ ProgressBar,Dropdown} from 'react-bootstrap'
export default class Main extends Component {
   constructor(props){
       super(props);
       this.state={
           list :[
               {Title:'AADR',Price:50.3,Quantity:430,Investment:17952.07},
               {Title:'MFEM',Price:23.2,Quantity:210,Investment:4725.84},
               {Title:'JPEM',Price:52.5,Quantity:328,Investment:18597.6},
               {Title:'KEMQ',Price:20.4,Quantity:801,Investment:17811.04},
               {Title:'KLDW',Price:32.9,Quantity:523,Investment:13765.36},
               {Title:'KOIN',Price:25.4,Quantity:335,Investment:8509},
           ],
           data:[
             {name:'Mutual Funds', count:'72.62',color:'dodgerblue'},
             {name:'ETFs', count:'27.38',color:"orange"}

            ]
           
        
       }
   }
   

       
          

        
  
    render() {
    
     var marketvalue,unrvalue,totalperc;

 var total =this.state.list.reduce((acc,curr)=>{
        return acc+curr.Investment;
},0)





    var result= this.state.list.map(key=>{
         return (
             <div>
               <div className="d-flex flex-row clmn">
                 <div className="item d-flex flex-row ">
                   <span className="hor"></span>
                   <ul className="tp">
                     <li>{key.Title}</li>
                     <li style={{color:'dodgerblue',fontWeight:'bolder'}}>${key.Price}</li>
                   </ul>
                      <ul className="tp text-left">
                        <li style={{color:'yellowgreen',fontWeight:'bold'}}>iShares</li>
                        <li className="by">by BlackDoc</li>
                        <li className="index">S&P 500 Index</li>
                        <li className="Us">US Equity</li>
                      </ul>
                   </div>
                       
                      
                  <div className="item d-flex flex-row">
                        <ul className="it text-left ">
                          <li>Quantity</li>
                          <li>Avg.Cost</li>
                          <li style={{whiteSpace:'nowrap'}}>Invested Amt</li>
                        </ul>
                        <ul className="it text-right">
                          <li className="values">{key.Quantity}</li>
                          <li className="values">{(key.Investment/key.Quantity).toFixed(2)}</li>
                          <li className="values">{(key.Investment).toFixed(2)}</li>
                        </ul>
                  </div> 
                  <div className="item d-flex flex-row ">
                        <ul className="mv text-left ">
                          <li>MarketValue:</li>
                          <li className="port">% of portfolio value</li>
                        </ul>

                        <ul className="mv text-right">
                          <li className="val values">{marketvalue =key.Price * key.Quantity}</li>
                          <li className="val values">{(key.Investment/total*100).toFixed(2)}%</li> <br/> 

                        </ul>
                        
                       
                        

                        <div className=" d-flex flex-column" style={{width:'550px'}}>
                        <ProgressBar className="progress" variant="success" now={(key.Investment/total*100).toFixed(2)} /> 
                        </div>
                        
                  </div>
                 
                  <div className="item d-flex flex-row"> 
                  <ul className="urv">
                          <li style={{whiteSpace:'nowrap'}}>Unrealized P/L</li>
                          <li>% Return</li>
                          
                        </ul>
                        <ul className="urv">
                         <li className="values">{ unrvalue= (marketvalue-key.Investment).toFixed(2)}</li>
                          <li className="values">{(unrvalue * 100/key.Investment).toFixed(2)} %</li>
                        </ul>
                       
                  </div>
                  <div className="item d-flex flex-column bt">
                  <button type="button" className=" bt">Buy</button>
                  <button type="button" className=" bt">Sell</button> 
                  </div>
                 </div>
                 
               </div>       
         ); 
      
            }
            
            )
            

            
     
        return (
            <div className="d-flex flex-row justify-content-between">
             <div className="cl"> {result}</div> 
   <div className="pie">
     <span className="title">Portfolio</span> 
   <DonutChart className="cl clm"
      
        innerRadius={70}
        outerRadius={100}
        transition={true}
        svgClass="example6"
        pieClass="pie6"
        displayTooltip={true}
        strokeWidth={15}
        data={this.state.data} 
        />
   <div className="drop">
   <Dropdown >
  <Dropdown.Toggle  id="dropdown-basic">
    Assetwise
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Assetwise</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
   </div>
     
   </div>
    
            </div>
        )
    }
}
