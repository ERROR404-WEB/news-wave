import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News  from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey='28328ef2aa4b468da20ed3e76b0531ed'; //-------<<<<<<<<<<<<<<<<<<
  //your api key here ... get your api key from "https://newsapi.org/"
  constructor()
  {
    super();
    this.state={
      progress:0,
      mode:0
    }
  }
    
  ToggleMode(){
    let htmlTag = document.getElementsByTagName('html')[0];
    if(!this.state.mode)
    {
    htmlTag.setAttribute( "data-bs-theme","dark");
    this.setState({mode:1});
    }
    else{
    htmlTag.setAttribute( "data-bs-theme","light");
    this.setState({mode:0});
    }
    
  }
  
  setProgress = (progress) =>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar ToggleMode={this.ToggleMode.bind(this)}/>
        <LoadingBar
            height={2}
            color='red'
            progress={this.state.progress}
          />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={"Top Headlines"} country={"in"} category={"general"}/>}/>
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={"Business Headlines"} country={"in"} category={"business"}/>}/>
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={"Entertainments Headlines"} country={"in"} category={"entertainments"}/>}/>
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={" Sports Headlines"} country={"in"} category={"sports"}/>}/>
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={" Health Headlines"} country={"in"} category={"health"}/>}/>
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={"Science Headlines"} country={"in"} category={"science"}/>}/>
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} heading={"Technology Headlines"} country={"in"} category={"technology"}/>}/>

        </Routes>
        </Router>
      </div>
    )
  }
}
