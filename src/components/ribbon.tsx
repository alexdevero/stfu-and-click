import React from 'react'

import './../styles/ribbon.css'

export const Ribbon = () => (
  <div className="ribbon-container one">
    <div className="ribbon-arm ribbon-arm-left">
      <div className="arrow arrow-top" />
      <div className="arrow arrow-bottom" />
    </div>

    <div className="ribbon-fold ribbon-fold-left" />

    <div className="ribbon-center">
      <div>
        <h2 className="clickers">TOP 10 Clickers</h2>
      </div>
    </div>

    <div className="ribbon-fold ribbon-fold-right" />

    <div className="ribbon-arm ribbon-arm-right">
      <div className="arrow arrow-top" />
      <div className="arrow arrow-bottom" />
    </div>
  </div>
)
