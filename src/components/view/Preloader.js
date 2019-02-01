import React from 'react';

export default ({ visible = false }) =>
  (visible && (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      </div>
    </div>
  )) ||
  null;
