import React from 'react';
import ReactDOM from 'react-dom';
import '../css/resources.css';

export default class MeTooC4A extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [{
        "title": "Addressing sexual harassment",
        "links": [{"title": "As complainants", "desc": "Filing Complaints, Self-Care", "icon": "http://projects.pro.to/assets/survivor.png", "url": "https://projects.pro.to/stories/complainants.html"},
        {"title": "As co-workers", "desc": "Response Strategies, Support Groups", "icon": "http://projects.pro.to/assets/employee.png", "url": "https://projects.pro.to/stories/for-employees.html"},
        {"title": "As employers", "desc": "ICC, Workshops, Reporting", "icon": "http://projects.pro.to/assets/org.png", "url": "https://projects.pro.to/stories/for-employers.html"}]
       }]
    }
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

  renderResources(){
    let data = this.state.data[0]
      return(
        <div className="tool-strip-container">
          <div className="col-4-tool-card">
            <div className="tool-card-title">
              {data.title}
            </div>
          </div>
          {data.links.map(x => {return(
            <div className="col-4-tool-card">
              <a className='tool-card-link' href={x.url} target='_blank'>
                <img className="tool-card-img" src={x.icon} />
                <div className="tool-card-title">
                  {x.title}
                </div>
                <div className="tool-card-desc">{x.desc}</div>
                <img src="https://projects.pro.to/assets/right-arrow.png" className="right-arrow-icon" />
              </a>
            </div>
          )})}
        </div>
      )
  }

  render() {
      return this.renderResources()
  }
}