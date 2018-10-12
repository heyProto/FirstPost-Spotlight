import React from 'react';
import ReactDOM from 'react-dom';

export default class MeTooC4A extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [{
        "title": "Addressing sexual harassment",
        "links": [{"title": "As complainants", "desc": "Filing complaints, self-care", "icon": "img/survivor.png", "url": ""},
        {"title": "As employees", "desc": "Response strategies, support groups", "icon": "img/employee.png", "url": ""},
        {"title": "As employers", "desc": "ICC, workshops, reporting", "icon": "img/org.png", "url": ""}]
       }]
    }
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

  renderResources(){
    let data = this.state.data[0]
    console.log(data.links)
      return(
        <div className="tool-strip-container">
          <div className="col-4-tool-card">
            <div className="tool-card-title">
              {data.title}
            </div>
          </div>
          {data.links.map(x => {return(
              <div className="col-4-tool-card">
              <img className="tool-card-img" src={x.icon} />
              <div className="tool-card-title">
              {x.title}
              </div>
              <div className="tool-card-desc">{x.desc}</div>
              <img src="img/right-arrow.png" className="right-arrow-icon" />
          </div>
            )})}
        </div>
      )
  }

  render() {    
      return this.renderResources()
  }
}