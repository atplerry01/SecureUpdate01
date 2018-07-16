import React, { Component } from "react";

class SubHeader extends Component {

    render() {

        const pageHeader = {
            height: 80
          };

        return(
            <div className="content-block  stick-to-footer">
            <div className="container-bg container-fluid" data-style="background-color:#036; background-image: url(assets/img/page-titleX.jpg); background-repeat: no-repeat; background-position: 50% 50%; width:100%">
                <div className="container-bg-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="page-item-title">
                                    <h1 className="text-center texttransform-none">{this.props.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs-container-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="breadcrumbs" typeof="BreadcrumbList" vocab="http://schema.org/">
                                    <span property="itemListElement" typeof="ListItem">
                                    <a property="item" typeof="WebPage" title="Go to Barrel." href="#" className="home">
                                    <span property="name">Barrel</span></a><meta property="position" content="1" /></span> &gt; 
                                    <span property="itemListElement" typeof="ListItem"><span property="name">Simple Header</span>
                                    <meta property="position" content="2" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
        );
    }
}

export default SubHeader;
