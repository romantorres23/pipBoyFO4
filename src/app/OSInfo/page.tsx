import React from 'react'

export default function OSInfo() {
  return (
    <div className="os-info-container">
      <div className="os-version-info">
        <div>
          <div className="animate-typing-1">**************** PIP-OS(R) v7.1.0.8 ****************</div>
        </div>
      </div>
      <div className="os-general-info">
        <ul className="bios-info">
          <li className="animate-typing-2 os-copyright">COPYRIGHT 2075 ROBCO(R)</li>
          <li className="animate-typing-3 os-loader-version">LOADER v1.1</li>
          <li className="animate-typing-4 os-exec-version">EXEC VERSION 41.10</li>
          <li className="animate-typing-5 os-ram-capacity">64K RAM SYSTEM</li>
          <li className="animate-typing-6 os-memory-capacity">38911 BYTES FREE</li>
          <li className="animate-typing-7 os-holotape-status">NO HOLOTAPE FOUND</li>
          <li className="animate-typing-8 os-load-rom">LOAD ROM(1): DEITRIX 303</li>
        </ul>
      </div>
    </div>
  )
}
