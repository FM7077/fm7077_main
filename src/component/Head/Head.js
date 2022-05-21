import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Head.css';
import configData from '../../config/config.json';
import PropTypes from 'prop-types';

class Head extends React.Component {

  renderLinks(){
    let links = configData.cards.map(c => 
      <a key={c.name} href={c.url_open} style={{color: "inherit"}}>{c.name}</a>
    )
    return links
  }

  render() {
    return (
      <header className="App-header" style={{height: this.props.height + "vh"}}>
        <div className='App-info'>
          <div className='logo-domain'>
            <img className='logo' src='favicon.ico' alt=''/>
            <p className="domain-name" onClick={()=>{window.location.reload()}}>FM7077.IT</p>
          </div>
          <div className='writer' style={{opacity: (100/70 * this.props.height - 30*100/70) / 100, height: this.props.height - 30}}>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                color: '#f0f8ff',
                fontWeight: 500,
                fontSize: '1.5em',
              }}
              startDelay={2000}
              cursorColor="#f0f8ff"
              multiText={configData.welcome_words}
              multiTextDelay={1000}
              multiTextLoop={true}
              typeSpeed={100}
            />
          </div>
        </div>
        {this.props.isMobile && <div className='links-container'>{this.renderLinks()}</div>}
      </header>
    )
  }
}

Head.propTypes ={
  isMobile: PropTypes.bool,
  height: PropTypes.number,
};
Head.defaultProps = {
  isMobile: false,
  height: 100
};
  
export default Head;