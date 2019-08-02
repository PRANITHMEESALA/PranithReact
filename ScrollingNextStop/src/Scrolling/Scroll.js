import React, { Component } from 'react';
import Styles from  '../Scrolling/Scroll.module.css';

const textArray = ['Next Stop:Perkit', 'Next Stop:Lakkora', 'Next Stop:Aminapur', 'Next Stop:Velpoor', 'Next Stop:Mothe', 'Final Stop:Bheemgal'];

class Home extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  startJourney=()=>{
    let st=document.getElementById('mymarquee');
    if(st.style.display==="none"){
        st.style.display="block";
        st.start();
    } 
   
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 15000);
   

    
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
    
  }
  
  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      
        <div className={Styles.Scroll}>
        <marquee scrollamount="15" id="mymarquee" style={{display:"none"}} >Destination Bheemgal  <span>{textThatChanges}</span></marquee><br/><br/><br/>
        <a  href="#" className={Styles.StartJourney} value="Start Journey" onClick={this.startJourney}>Start Journey </a>
      </div>
    )
  }
}

export default Home;