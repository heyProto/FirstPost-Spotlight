import React from 'react';

import '../css/List.css';

class ListCards extends React.Component {

  constructor (props) {
    super(props);

    let stateVar = {
      no_of_cards: 28,
      cardsInRow: window.innerWidth <= 500 ? 1 : 3,
      cardsVisible: this.props.dataJSON.slice(0, 28)
    };

    this.state = stateVar;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cardsVisible: nextProps.dataJSON.slice(0, this.state.no_of_cards)
    });
  }

  loadMoreCard() {
    let size = this.props.dataJSON.length;
    let x = (this.state.no_of_cards + this.state.no_of_cards <= size) ? this.state.no_of_cards + this.state.no_of_cards : size;

    this.setState({
      no_of_cards : x,
      cardsVisible: this.props.dataJSON.slice(0, x)
    })
  }

  getSourceProperties(platform) {
    switch(platform) {
      case "Facebook": return {bgcolor: "#3c5a9a", img_url: "https://next.pro.to/assets/social-icons/facebook.png"}
      case "Twitter": return {bgcolor: "#1da1f2", img_url: "https://next.pro.to/assets/social-icons/twitter.png"}
      default: return {bgcolor: "#c75c5c", img_url: "https://next.pro.to/assets/social-icons/news.png"}
    }
  }


  render() {
      if (this.props.dataJSON.length === 0) {
      return(<h2>No cards to display</h2>)
    } else {
      let cards = this.state.cardsVisible.map((card, i) => {
        let class_name = (((i+1)% this.state.cardsInRow) == 0) ? "protograph-card div-without-margin-right" : "protograph-card";
        let {bgcolor, img_url} =this.getSourceProperties(card.source_platform);
        return(
          <div
            className={`protograph-grid-card protograph-trigger-modal ${class_name}`}>
            <a href={card.source_url} target="_blank">
              <div className="proto-social-post-card">
                <div className="post-img" style={{backgroundColor: bgcolor}}>
                  <img src={img_url} height="20" width="20" />
                </div>
                <div className="post-content">
                  <div className="post-title">
                    <span className="post-name">{card.complainant_name}</span>
                    <span className="post-handle">{card.complainant_handle}</span>
                    {/* <div className="post-expand"><img src="" /></div> */}
                  </div>
                  
                </div>
                <div className="post-data">
                  {card.text && card.text.length > 160? card.text.substr(0,(card.text.indexOf(' ', 160) < 0? 160: card.text.indexOf(' ', 160))) + '...':card.text}
                </div>
                
                <div className="post-categories">
                  <div className="post-category">
                    <div className="post-category-title">ACCUSED</div>
                    <div className="post-category-data">{card.accused_name? card.accused_name: 'Unknown'}</div>
                  </div>
                  <div className="post-category">
                    <div className="post-category-title">NATURE OF ASSAULT</div>
                    <div className="post-category-data">{card.nature? card.nature: 'Unknown'}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        )
      })
      return (
        <div id="cards-list" className="protograph-card-area">
          {cards}
          <div className="clearfix"></div>
          {this.state.no_of_cards < this.props.dataJSON.length ? <button id="show-more-cards" onClick={(e) => this.loadMoreCard()}>Show more</button> : null}
        </div>
      );
    }
  }
}

export default ListCards;