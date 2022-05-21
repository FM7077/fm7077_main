import React from 'react';
import './Card.css';
import configData from '../../config/config.json'
import ReactCardFlip from 'react-card-flip';
import PropTypes from 'prop-types';

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cards: configData.cards
    };
  }

  flipCard(name, isFlipped, e) {
    let cards = this.state.cards
    cards.map(c => {
      if(c.name === name){
        c.isFlipped = isFlipped
      }else{
        c.isFlipped = isFlipped & false
      }
      return c
    })
    this.setState({
      cards: cards
    });
  }

  renderCards(){
    const cards = this.state.cards.map((card) =>
      <div key={card.name} className='Card-container' style={{width: this.props.isMobile ? "100vw" : "33.33vw"}}>
        <ReactCardFlip isFlipped={card.isFlipped} flipDirection="horizontal" cardStyles={{back: {"overflow": "hidden"}}}>
          {/* front card */} 
          {/*  style={{ 'background-image': `url(${card.front_background_img})`}}  */}
          <div className='Card-front'onMouseOver={this.flipCard.bind(this, card.name, true)}  onClick={() => {window.open(card.url_open)}}>
            <img className='logo' src={card.front_logo} alt=''/>
            <p class="desc">{card.front_desc.cn}</p>
          </div>

          {/* back card */}
          <div className='Card-back'>
            <iframe title={card.name} onMouseLeave={this.flipCard.bind(this, card.name, false)} src={card.url_show} width="100%" height={'100%'}/>
          </div>
        </ReactCardFlip>
      </div>
    );
    return cards;
  }

  render(){
    return (
      <div className='Card-grid' style={{
        "gridTemplateColumns": this.props.isMobile ? "repeat(auto-fill, 100vw)" : "repeat(auto-fill, 33.33vw)",
        "height": this.props.height + "vh"}}>
        {this.renderCards()}
      </div>
    )
  }
}

Card.propTypes ={
  isMobile: PropTypes.bool,
  height: PropTypes.number,
};
Card.defaultProps = {
  isMobile: false,
  height: 0,
};

export default Card