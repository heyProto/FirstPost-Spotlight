import React from "react";
import ReactDOM from "react-dom";
import '../css/cover.css';

export default class MeTooCover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [{
        "title": "#Spotlight",
        "desc": "#Spotlight is a watch on sexual assault and everyday harassment in the workplace. The project is an attempt to collate experiences, opinions and resources on sexual harassment in the Indian media and newsrooms. Through a database of cases reported and resources, the project also seeks to present insights on sexual harassment in Indian media"
      }]
    }
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

  renderCover() {
    let data = this.state.data[0]
    let num = this.props.dataSize
    // console.log(num)
    let numArray = ('000'+num).slice(-3).split('')
    // console.log(numArray)
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
              <img src="http://projects.pro.to/assets/layer1.png" className="layer1" />
              <img src="http://projects.pro.to/assets/layer2.png" className="layer2" />
              <img src="http://projects.pro.to/assets/layer3.png" className="layer3" />
            </div> 
          </div>
          
        </div>
      );
  }

  render() {
    return this.renderCover()
  }
}