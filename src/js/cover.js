import React from "react";
import ReactDOM from "react-dom";
import '../css/cover.css';

export default class MeTooCover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        "title": "#Spotlight",
        "desc": "#Spotlight is a watch on sexual assault and everyday harassment in the workplace. The project is an attempt to collate experiences, opinions and resources on sexual harassment in the Indian media and newsrooms."
      }]
    }
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

  renderCover() {
    let data = this.state.data[0]
    let num = this.props.dataSize
    console.log(num)
    let numArray = ('000'+num).slice(-3).split('')
    console.log(numArray)
      return (
        <div id="protograph_div" className="cover-container">

          <div className="anim-div">
            <div className="tweets">
              <img src="https://p.firstpost.com/assets/ptweet1.png" className="ptweet1" />
              <img src="https://p.firstpost.com/assets/ptweet2.png" className="ptweet2" />
              <img src="https://p.firstpost.com/assets/ptweet3.png" className="ptweet3" />
              <img src="https://p.firstpost.com/assets/ptweet4.png" className="ptweet4" />
              <img src="https://p.firstpost.com/assets/ptweet5.png" className="ptweet5" />
              <img src="https://p.firstpost.com/assets/ptweet6.png" className="ptweet6" />
              <img src="https://p.firstpost.com/assets/btweet1.png" className="btweet1" />
              <img src="https://p.firstpost.com/assets/btweet2.png" className="btweet2" />
              <img src="https://p.firstpost.com/assets/btweet3.png" className="btweet3" />
              <img src="https://p.firstpost.com/assets/gtweet1.png" className="gtweet1" />
              <img src="https://p.firstpost.com/assets/gtweet2.png" className="gtweet2" />
              <img src="https://p.firstpost.com/assets/gtweet3.png" className="gtweet3" />
              <img src="https://p.firstpost.com/assets/gtweet4.png" className="gtweet4" />
              <img src="https://p.firstpost.com/assets/gtweet5.png" className="gtweet5" />
              <img src="https://p.firstpost.com/assets/gtweet6.png" className="gtweet6" />
            </div>
          </div>

          <div className="stats-div">
            <div className="title">{data.title}</div>
            <div className="flip-num-container">
            <div className="flip-counter">
              {numArray.map(x => {return (
                  <div className="flip-num-bg"><div className="flip-num">{x}</div></div>
                )})}
            </div>
              <div className="flip-counter-caption">incidents reported</div>
            </div>
            <div className="desc">{data.desc}</div>

          </div>

        </div>
      );
  }

  render() {
    return this.renderCover()
  }
}