import React from 'react';

function Curve({className}) {
  return (
    <svg className={className}  width="100%" height="563" viewBox="0 0 1920 563" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2163.86 130.875C2035.07 20.3109 1683.21 -122.021 1306.1 193.165C834.699 587.147 262.5 776.804 -244.148 183.689" stroke="#FCD043" stroke-width="2" />
    </svg>
  )
}

function СurveGallery({className}) {
  return (
  <svg className={className} width="100%" height="563" viewBox="0 0 1920 563" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M2345.86 130.875C2217.07 20.3109 1865.21 -122.021 1488.1 193.165C1016.7 587.147 444.5 776.804 -62.1477 183.689" stroke="#FCD043" />
  </svg>
  )
}

export {Curve, СurveGallery}