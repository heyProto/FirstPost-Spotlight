import React from "react";
import '../css/cover.css';

export default class MeTooCover extends React.Component {
  constructor(props) {
    super(props);
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

  renderCol4() {
      return (
        <div id="protograph_div" className="protograph-col4-mode">
          In progress
        </div>
      );
  }

  renderCol16() {
      return (
        <div id="protograph_div" className="protograph-col16-mode">
        
          <div className="stats-div">
            <div className="title">placeholder</div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur <b>adipiscing</b> elit. Nullam tempus ut nisi vitae rhoncus. Nulla tempor commodo libero ac efficitur. Aenean porta justo in porttitor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus ut nisi vitae rhoncus. Nulla tempor commodo <b>libero</b> ac efficitur. Aenean porta justo in porttitor porta.</div>
            <div className="flip-num-container">
            <div className="flip-counter">
              <div className="flip-num-bg"><div className="flip-num">3</div></div>
              <div className="flip-num-bg"><div className="flip-num">2</div></div>
              <div className="flip-num-bg"><div className="flip-num">8</div></div>
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
        return this.renderCol16();
  }
}