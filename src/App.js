import React from 'react';
import Head from './component/Head/Head';
import './App.css';
import Card from './component/Card/Card';

class App extends React.Component {
  constructor() {
    super();
    let userAgentInfo = navigator.userAgent.toLowerCase();
    let Agents = ["android","iphone","symbianos", "windows phone","ipod"];
    let isMobile = false;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) >= 0) {
        isMobile = true;
        break;
      }
    }
    this.state = {
        pageHigh: 0,
        isMobile: isMobile,
        headHeight: 100,
        cardHeight: 0,
    };
  }

  handleScroll(event){
    let {headHeight, cardHeight, isMobile} = this.state
    let cardTimes = isMobile ? 3 : 1
    if(event.deltaY > 0 && headHeight > 30){
      headHeight -= 5
      cardHeight += (5 * cardTimes)
    }
    if(event.deltaY < 0 && cardHeight > 0){
      headHeight += 5
      cardHeight -= (5 * cardTimes)
    }
    this.setState({
      headHeight: headHeight,
      cardHeight: cardHeight
    })
  }

  render() {
    return (
      <div className="App" onWheel={this.handleScroll.bind(this)}>
        <Head isMobile={this.state.isMobile} height={this.state.headHeight}/>
        <Card isMobile={this.state.isMobile} height={this.state.cardHeight}/>
      </div>
    )
  }
}

export default App;
