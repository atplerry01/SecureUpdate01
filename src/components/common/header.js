import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  render() {    
    const contentWrapper = {
      height: 80
    };
    return (
<header className="sticky-header main-header sticky-header-elements-headeronly mainmenu-position-menu_in_header">
    <div className="container">
        <div className="row">
            <div className="col-md-12" style={contentWrapper}>
                <div className="header-left">
                    <a className="logo-link" href="#">
                        <img src="assets/img/logo-barrel-new-black.png"
                             alt="Barrel"
                             className="regular-logo" />
                        <img src="assets/img/logo-barrel-new.png"
                             alt="Barrel"
                             className="light-logo" />
                    </a>
                    <div className="mobile-main-menu-toggle"
                         data-toggle="collapse"
                         data-target=".collapse">
                        <i className="fa fa-bars" />
                    </div>
                   
                </div>

                <div className="header-center">
                    <div id="navbar"
                         className="navbar navbar-default clearfix mgt-mega-menu menu-right menu-uppercase menu-style-border-bottom">
                        <div className="navbar-inner">
                            <div className="navbar-collapse collapse">
                                <ul id="menu-main-menu-2" className="nav">
                                    <li id="mgt-menu-item-26"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                                        <a href="/">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li id="mgt-menu-item-113"
                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor menu-item-has-children">
                                        <Link to="/about">
                                          <span>About Us</span>
                                        </Link>
                                        <ul className="sub-menu  megamenu-column-1 level-0">
                                            <li id="mgt-menu-item-1764"
                                                className="menu-item menu-item-type-post_type menu-item-object-page">
                                                <Link to="/about">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                  <span>About SecureID</span>
                                                </Link>
                                            </li>
                                            <li id="mgt-menu-item-1764"
                                                className="menu-item menu-item-type-post_type menu-item-object-page">
                                              
                                                <Link to="/our-team">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                  <span>Our Team</span>
                                                </Link>

                                            </li>
                                            <li id="mgt-menu-item-1792"
                                                className="menu-item menu-item-type-custom menu-item-object-custom">
                                               
                                                <Link to="/careers">
                                                <i className="fa fa-angle-right" aria-hidden="true" />
                                                  <span>Careers</span>
                                                </Link>

                                            </li>
                                        </ul>
                                    </li>
                                    <li id="mgt-menu-item-115"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mgt-menu-fullwidth-inside menu-item-multicolumn menu-item-multicolumn">
                                       
                                        <a href="/banking">
                                                  <span>Products & Services</span>
                                        </a>
                                        <ul className="sub-menu  megamenu-column-4 mgt-menu-fullwidth level-0">
                                            <li id="mgt-menu-item-2045"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                               
                                                <a href="/banking">
                                                <span data-style="color:red">
                                                {" "}
                                                <i className="fa fa-university"
                                                   aria-hidden="true" />{" "}
                                                BANKING & PAYMENTS
                                            </span>
                                              </a>

                                                <ul className="sub-menu  level-1">
                                                    <li id="mgt-menu-item-1819"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/banking">
                                                        <i className="fa fa-angle-right"
                                                           aria-hidden="true" />{" "}
                                                        Digital Payment
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-1855"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/banking#ecommerce">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            eBanking & eCommerce
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2630"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/banking#card-payments">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Cards & Payment
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2036"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/banking#bank-services">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Services for Banks
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="mgt-menu-item-2046"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <a href="/governments">
                                                    <span data-style="color:green">
                                                        {" "}
                                                        <i className="fa fa-building"
                                                           aria-hidden="true" />{" "}
                                                        GOVERNMENTS
                                                    </span>
                                                </a>
                                                <ul className="sub-menu  level-1">
                                                    <li id="mgt-menu-item-2711"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/governments">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Biometrics
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-3508"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/governments#identity-solutions">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Identity Solutions
                                                        </a>
                                                    </li>

                                                    <li id="mgt-menu-item-2258"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/governments#telecommunications">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Telecommunications
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2389"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/governments#portfolio">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Portfolio
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2662"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/governments">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Government ID Solutions
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="mgt-menu-item-2371"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <a href="/security">
                                                    <span data-style="color:blue">
                                                        <i className="fa fa-cog" aria-hidden="true" />{" "}
                                                        ENTERPRICE SECURITY
                                                    </span>
                                                </a>
                                                <ul className="sub-menu  level-1">
                                                    <li id="mgt-menu-item-1900"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/security">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Identity/Access Management
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2861"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/security#data-encryption">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Data Encryption
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2003"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/security#crypto-mgt">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Crypto Management
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2460"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/security#cloud-security">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Cloud Security
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="mgt-menu-item-2388"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                                <a href="/digital">
                                                    <span data-style="color:purple">
                                                        <i className="fa fa-fax" aria-hidden="true" />{" "}
                                                        DIGITAL SOLUTIONS
                                                    </span>
                                                </a>

                                                <ul className="sub-menu  level-1">
                                                    <li id="mgt-menu-item-2303"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/digital">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Smart Devices
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2050"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/digital#biometrics">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />{" "}
                                                            Biometrics & KYC
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2516"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/digital#payment-collections">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />Payment & Collections
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2118"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/digital#business-automation">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Business/Automation
                                                        </a>
                                                    </li>
                                                    <li id="mgt-menu-item-2406"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page">
                                                        <a href="/digital#development-support">
                                                            <i className="fa fa-angle-right"
                                                               aria-hidden="true" />
                                                            Development & Support
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li id="mgt-menu-item-30"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-multicolumn">
                                        <Link to="/gallery">
                                            <span>Gallery</span>
                                        </Link>
                                    </li>

                                    <li id="mgt-menu-item-30"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-multicolumn">
                                        <Link to="/contact-us">
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
    );
  }
}

export default Header;
