import React, { Component } from "react";
import { connect } from "react-redux";
import './MedicalFacility.scss';
import { FormattedMessage } from "react-intl";


import Slider from "react-slick";

import medicalfacility from "../../../assets/MedicalFacility/152704logo-bvcr-moi.webp"

class MedicalFacility extends Component {
  render() {
    
    return (
      <div className="section-share section-medical-facility">
        <div className="specialty-container">
          <div className="specialty-header">
            <span>Cơ sở y tế</span>
            <button>Xem thêm</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <div className="specialty-text">hệ thống thu cúc 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
