import React from 'react'
import Image from 'next/image'

// Images
import successGif from '../assets/images/pip-boy-success-animate.gif';

export default function OSInfo() {
  return (
    <>
      <div className="pipboy-img-container">
        <Image
          src={successGif}
          alt="Success"
          className="styled-text pipboy-success"
          priority
        />
      </div>
      <div className="center-initiating-text pipboy-initiating-text">
        <span className="animate-initiating-1">Initiating</span>
        <span className="animate-initiating-1">.</span>
      </div>
    </>
  )
}
