import React from 'react'
import {Features,theme} from "./../../configData"
import "./feature.css"

function feature() {
  return (
    <div >
      <h2 style={{ color: theme.headingColor, textAlign: 'center' }}>Our Features</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Features.map((feature, index) => (
          <div key={index} className='featurecard'>
            <img src={feature.featureImg} alt={feature.featureName} className='featureImg'  />
            <p style={{ color: theme.secondaryColor }}>{feature.featureName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default feature