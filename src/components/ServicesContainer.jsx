import React, { Component } from "react";
import Service from "./Service";
import { connect } from "react-redux";

class ServicesContainer extends Component {
  render() {
    return (
      <div className="container p-4">
        <div className="row">
          {this.props.services.map(service => (
            <div className="col col-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  services: state.services
});
export default connect(mapStateToProps)(ServicesContainer);
