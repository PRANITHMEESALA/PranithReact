import React,{Component} from 'react'
class Selection extends Component {
  constructor() {
    super();
    this.state = {
      optionsdata : [
        {Title:'AADR',Price:50.3,Quantity:430,Investment:17952.07},
        {Title:'MFEM',Price:23.2,Quantity:210,Investment:4725.84},
        {Title:'JPEM',Price:52.5,Quantity:328,Investment:18597.6},
        {Title:'KEMQ',Price:20.4,Quantity:801,Investment:17811.04},
        {Title:'KLDW',Price:32.9,Quantity:523,Investment:13765.36},
        {Title:'KOIN',Price:25.4,Quantity:335,Investment:8509},
    ],
    }
  }
  handleChange = (e) => {
    console.log(e.target.value);
    var value = this.state.optionsdata.filter((item)=> {
      return item.Title === e.target.value
    })
    console.log(value[0].Title);
  }
  render() {
    return (
      <select onChange={this.handleChange}>
        {this.state.optionsdata.map((data, key)=>{
            return (
              // <input type="text" name="" id="" value={data.Title}/>
              // <input type="text" name="" id="" value={data.Quantity}/>
              // <input type="text" name="" id="" value={data}/>

          <option key={key} value={data.Title}>{data.value}</option> )
        })}
      </select>
    )
  }
}
export default Selection;