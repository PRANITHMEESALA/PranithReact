import React,{Component} from 'react';
import './App.css';
import Main from './Components/Main'
import SlideDrawer from './Components/SlideDrawer/Slidedrawer'
import Backdrop from './Components/SlideDrawer/Backdrop'
import MainPage from './Components/SlideDrawer/Toggle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from './Components/SlideDrawer/Toggle';
class App extends Component {
  // state = {
  //    drawerOpen: false
  //   }
  //  drawerToggleClickHandler = () => {
  //      this.setState({
  //        drawerOpen: !this.state.drawerOpen
  //      })
  //  }
  //  backdropClickHandler = () => {
  //   this.setState({
  //     drawerOpen: false
  //   })
  // }
  render(){
    
    // let backdrop;
    // if(this.state.drawerOpen){
    //   backdrop = <Backdrop close={this.backdropClickHandler}/>;
    //  }
    return (
      <div className="App">
        <Main/>
        {/* <div>
             < SlideDrawer show={this.state.drawerOpen}/>
             { backdrop }
             < Toggle toggle={this.drawerToggleClickHandler}/>
          </div> */}
       
      </div>
    );
  
  }
  }

export default App;
