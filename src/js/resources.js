import React from 'react';
import '../css/resources.css';

export default class MeTooC4A extends React.Component {
  constructor(props) {
    super(props)
  }

  exportData() {
    return this.props.selector.getBoundingClientRect();
  }

 
  renderCol16(){
      return(
        <div className="col-16-tool-strip">
          <div className="col-4-tool-card">
            <div className="tool-card-title">
              Addressing sexual harassment
            </div>
          </div>
          <div className="col-4-tool-card">
              <img className="tool-card-img" src="img/survivor.png" />
              <div className="tool-card-title">
              As a complainant
              </div>
              <div className="tool-card-desc">Filing complaints, self-care</div>
              <img src="img/right-arrow.png" className="right-arrow-icon" />
          </div>
          <div className="col-4-tool-card">
          <img className="tool-card-img" src="img/employee.png" />
            <div className="tool-card-title">
              As employees
              </div>
              <div className="tool-card-desc">Response strategies, support groups</div>
              <img src="img/right-arrow.png" className="right-arrow-icon" />
          </div>
          <div className="col-4-tool-card">
              <img className="tool-card-img" src="img/org.png" />
              <div className="tool-card-title">
              As an organisation
              </div>
              <div className="tool-card-desc">ICC, workshops, reporting</div>
              <img src="img/right-arrow.png" className="right-arrow-icon"/>
          </div>
        </div>
      )
  }

  renderCol4(){
      return(
        <div className="col-4-tool-strip col-4-mobile">
          <div id="card_1_tool" className="col-4-tool-card">
            <div className="tool-card-title">
              Resources for:
            </div>
          </div>
          <div className="horizontal-divider"></div>
          <div id="card_2_tool" className="col-4-tool-card">
            <div className="tool-card-title">
              <img className="tool-card-img" src="img/survivor.png" />
               Survivors
              <img src="img/right-arrow.png" className="right-arrow-icon"/>
            </div>
          </div>
          <div className="horizontal-divider"></div>
          <div id="card_3_tool" className="col-4-tool-card">
            <div className="tool-card-title">
              <img className="tool-card-img" src="img/employee.png" />
              Colleagues
              <img src="img/right-arrow.png" className="right-arrow-icon"/>
            </div>
          </div>
          <div className="horizontal-divider"></div>
          <div className="col-4-tool-card">
            <div className="tool-card-title">
              <img className="tool-card-img" src="img/org.png" />
              Organisations
              <img src="img/right-arrow.png" className="right-arrow-icon"/>
            </div>
          </div>
        </div>
      )      
  }

  render() {
        return this.renderCol16();
  }
}