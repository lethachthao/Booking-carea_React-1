import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./section/Specialty"
import MedicalFacility from "./section/MedicalFacility";
import OutStandingDoctor from "./section/OutStandingDoctor";
import HnadBook from "./section/HnadBook";
import About from "./section/About";
import HomeFooter from "./HomeFooter";
import './HomePage.scss'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { set } from "lodash";



class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return(
        <div>
            <HomeHeader/>
            <Specialty settings={settings}/>
            <MedicalFacility settings={settings}/>
            <OutStandingDoctor settings={settings}/>
            <HnadBook settings={settings}/>
            <About/>
            <HomeFooter/>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
