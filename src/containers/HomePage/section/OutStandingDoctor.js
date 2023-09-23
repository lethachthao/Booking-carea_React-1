import React, { Component } from "react";
import { connect } from "react-redux";
import "./MedicalFacility.scss";
import { FormattedMessage } from "react-intl";

import Slider from "react-slick";

import medicalfacility from "../../../assets/MedicalFacility/152704logo-bvcr-moi.webp";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="specialty-container">
          <div className="specialty-header">
            <span>Bác sĩ nổi bật tuần qua</span>
            <button>Xem thêm</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <div className="">hệ thống thu cúc 1</div>
                    <div>Cơ xương khớp</div>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
