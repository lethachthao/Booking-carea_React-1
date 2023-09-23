import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";

//react-slick
import Slider from "react-slick";

import specialtyImg from "../../../assets/specialty/113208-than-kinh.jpg"
class Specialty extends Component {

  render() {
      
    return (
      <div className="section-share section-specialty">
        <div className="specialty-container">
          <div className="specialty-header">
            <span>chuyên khoa</span>
            <button>Xem thêm</button>
          </div>

          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 2</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 3</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 4</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 5</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-specialty"></div>
                <div className="specialty-text">Cơ xương khớp 6</div>
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
    language: state.app.language, // đảm bảo rằng bạn đã thay đổi 'appReducer' thành tên reducer của bạn
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
