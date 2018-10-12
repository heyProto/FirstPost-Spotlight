import React from "react";
import ReactDOM from "react-dom";
import '../css/cover.css';

class SpanRenderer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span>{JSON.stringify(this.props)}</span>;
  }
}

export default class MeTooCover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        "title": "Placeholder",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus ut nisi vitae rhoncus. Nulla tempor commodo libero ac efficitur. Aenean porta justo in porttitor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus ut nisi vitae rhoncus. Nulla tempor commodo libero ac efficitur. Aenean porta justo in porttitor porta."
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
    let numArray = num.toString().split('')
    console.log(numArray)
      return (
        <div id="protograph_div" className="cover-container">
          <div className="stats-div">
            <div className="title">{data.title}</div>
            <div className="desc">{data.desc}</div>
            <div className="flip-num-container">
            <div className="flip-counter">
              {numArray.map(x => {return (
                  <div className="flip-num-bg"><div className="flip-num">{x}</div></div>
                )})}
            </div>
              <div className="flip-counter-caption">incidents reported</div>
            </div>
          </div>

          <div className="anim-div">
            <div className="tweets">
              <img src="img/layer1.png" className="layer1" />
              <img src="img/layer2.png" className="layer2" />
              <img src="img/layer3.png" className="layer3" />
            </div> 
          </div>
          
        </div>
      );
  }

  render() {
    return this.renderCover()
  }
}