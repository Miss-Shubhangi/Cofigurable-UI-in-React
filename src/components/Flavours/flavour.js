
import React from 'react';
import "./flavour.css"
import { Flavors, theme } from './../../configData';

const Flavor = () => {
  return (
    <div>
      <h2 style={{ color: theme.headingColor, textAlign: 'center' }}>Our Flavors</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {Flavors.map((flavor, index) => (
          <div key={index} className='flavorcard' >
            <img src={flavor.flavourImg} className='flavourImg' style={{ }} />
            <p style={{ color: theme.secondaryColor ,fontSize:'20px' }}>{flavor.flavourName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavor;
