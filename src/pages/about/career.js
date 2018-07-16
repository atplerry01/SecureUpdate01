import React from 'react';
import SubHeader from "../../components/common/sub-header";

const Career = (props) => {
    console.log(props);
    return (
        <div>
        <SubHeader title = "Career" />

          <div className="content-block  stick-to-footer">
          <div className="page-container container">
            <div className="row">
              <div className="col-md-12 entry-content">
                Career
              </div>
            </div>
          </div>
        </div>

        </div>    
    )
} 

export default Career