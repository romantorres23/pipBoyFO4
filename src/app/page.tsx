'use client'

import { useEffect } from 'react'
import Image from 'next/image'

// Images
import pipboyWalking from './assets/images/walking-pipboy.gif';

export default function Page() {
  useEffect(() => {

  }, [])

  return (
    <>
      <div className="navbar styled-text">
        <ul className="navbar-main">
          <li><a href="#">STAT</a></li>
          <li><a href="#">INV</a></li>
          <li><a href="#">DATA</a></li>
          <li><a href="#">MAP</a></li>
          <li><a href="#">RADIO</a></li>
        </ul>
      </div>
      <div className="main-content">
        <ul className="navbar-secondary">
          <li>STATUS</li>
          <li>SPECIAL</li>
          <li>PERKS</li>
        </ul>
        <div className="walking-pipboy-container">
          <Image
            src={pipboyWalking}
            alt="Pipboy walking"
            className="pipboy-walking"
            priority
          />
        </div>
        <div className="footer">
          <ul className="styled-text navbar-buttons">
            <li>STIMPAK(1)</li>
            <li>RADAWAY(0)</li>
          </ul>
          <div className="indicators-container">
            <div className="health-indicator">
              <ul>
                <li>HP</li>
                <li>57/135</li>
              </ul>
            </div>
            <div className="level-indicator">
              <ul>
                <li>LEVEL 6</li>
                <li className="progress-bar-container"><span className="progress-bar"></span></li>
              </ul>
            </div>
            <div className="ammo-indicator">
              <ul>
                <li>AP</li>
                <li>90/90</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}