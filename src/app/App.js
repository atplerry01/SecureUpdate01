import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { history } from '../_helpers/history';

import "../assets/css/pe-icon-7-stroke.css?ver=4.8.6";
import "../assets/css/styles.css?ver=4.8";
import "../assets/css/nivo-lightbox.min.css?ver=1.6.12";
import "../assets/css/default.css?ver=1.6.12";
import "../assets/css/settings.css?ver=5.4.5.1";
import "../assets/css/woocommerce-layout.css?ver=3.1.1";
import "../assets/css/woocommerce-smallscreen.css?ver=3.1.1";
import "../assets/css/woocommerce.css?ver=3.1.1";
import "../assets/css/owl.carousel.css?ver=4.8.6";
import "../assets/css/owl.theme.css?ver=4.8.6";
import "../assets/css/barr-style.css?ver=1.0";
import "../assets/css/responsive.css?ver=all";
import "../assets/css/animations.css?ver=4.8.6";
import "../assets/css/mega-menu.css?ver=4.8.6";
import "../assets/css/mega-menu-responsive.css?ver=4.8.6";
import "../assets/css/font-awesome.min.css?ver=5.2";
import "../assets/css/pe-icon-7-stroke.css?ver=4.8.6";
import "../assets/css/offcanvasmenu.css?ver=4.8.6";
import "../assets/css/nanoscroller.css?ver=4.8.6";
import "../assets/css/hover.css?ver=4.8.6";
import "../assets/css/dashicons.min.css?ver=4.8.6";
import "../assets/css/thickbox.css?ver=4.8.6";
import "../assets/css/css-skin.css?ver=4.8.6";
//////
import "../assets/css/jquery.fonticonpicker.min.css?ver=5.2";
import "../assets/css/jquery.fonticonpicker.vcgrey.min.css?ver=5.2";
import "../assets/css/vc_openiconic.min.css?ver=5.2";
import "../assets/css/animate.min.css?ver=5.2";
import "../assets/css/js_composer_tta.min.css?ver=5.2";
import "../assets/css/slick.css?ver=4.8.6";
import "../assets/css/custom.css";

import '../app/App.css';

import Header from '../components/common/header';
import Footer from "../components/common/footer";

// Page Sections
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Career from "../pages/about/career";
import OurTeam from "../pages/about/our-team";

import Banking from "../pages/services/banking";
import Digital from "../pages/services/digital";
import Government from "../pages/services/government";
import Security from "../pages/services/security";

import Gallery from "../pages/gallery/gallery";
import Contact from "../pages/contact/contact";

import NoMatch from "../components/common/nomatch";

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showSubHeader: false
    };
  }

  render() {
    return (
      <Router history={history} {...this.state}>
        <div>
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/about" exact component={About} />
            <Route path="/careers" exact component={Career} />
            <Route path="/our-team" exact component={OurTeam} />

            <Route path="/banking" exact component={Banking} />
            <Route path="/governments" exact component={Government} />
            <Route path="/security" exact component={Security} />
            <Route path="/digital" exact component={Digital} />

            <Route path="/gallery" exact component={Gallery} />
            <Route path="/contact-us" exact component={Contact} />

            <Route path="*" component={NoMatch} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
