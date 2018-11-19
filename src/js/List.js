import React from 'react';

import '../css/List.css';

class ListCards extends React.Component {

  constructor (props) {
    super(props);

    let stateVar = {
      no_of_cards: 28,
      cardsInRow: window.innerWidth <= 500 ? 1 : 3,
      cardsVisible: this.props.dataJSON.slice(0, 27)
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


  render() {
      if (this.props.dataJSON.length === 0) {
      return(<h2>No cards to display</h2>)
    } else {
      let cards = this.state.cardsVisible.map((card, i) => {
        let class_name = (((i+1)% this.state.cardsInRow) == 0) ? "protograph-card div-without-margin-right" : "protograph-card";
        return(
          <div
            className={`protograph-grid-card protograph-trigger-modal ${class_name}`}>
              <div className="proto-social-post-card">
                <div className="post-content">
                <div className="post-category">
                    <div className="post-category-title">ACCUSED</div>
                    <div className="post-category-data">{card.accused_url ? (<a href={card.accused_url} target="_blank">{card.accused_name}</a>) : (card.accused_name ? card.accused_name : 'Unknown')}</div> 
                  </div>
                  
                </div>
                
                <div className="card-image-div">{<a href={card.accused_url ? card.accused_url : "#"}><img className="card-image" src={card.accused_img ? card.accused_img : "https://p.firstpost.com/Assets/Accused-img/placeholder-user.png"} /></a>}</div>
                
                <div className="post-categories">

                  <div className="post-category">
                    <div className="post-category-title">COMPLAINANT</div>
                    <div className="post-category-data">{card.complainant_url ? (<a href={card.complainant_url} target="_blank">{card.complainant_name}</a>) : (card.complainant_name ? card.complainant_name : 'Unknown')}</div>
                  </div>

                  <div className="post-category">
                    <div className="post-category-title">NATURE OF HARASSMENT</div>
                    <div className="post-category-data"><a href="https://p.firstpost.com/stories/dictionary-of-how-we-have-categorized-nature-of-harassment.html" target="_blank" title="Go to dictionary of classification">{card.nature && card.nature.length>0? card.nature.join(', '): 'Unknown'}</a></div>
                  </div>

                  
                
                </div>

                <div className="social-icons">
                <div className="post-category-data">{(card.news_platform != 'Social Media') && (<a href={card.news_url} className="news-link">{card.news_platform}</a>)}</div>
                  {card.social_platform == 'Facebook' && (<a href={card.social_url}><img src="https://cdn.protograph.pykih.com/Assets/social-icons/facebook-outline.png" className="card-social" /></a>)}
                  {card.social_platform == 'Twitter' && (<a href={card.social_url}><img src="https://cdn.protograph.pykih.com/Assets/social-icons/twitter-outline.png" className="card-social" /></a>)}
                </div>
              </div>
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