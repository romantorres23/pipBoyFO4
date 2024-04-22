import React from 'react'

export default function BootLoaderAnimation() {
  return (
    <div className="bootloader-animation">
      <div className="bootload-sequence">
        <div className="bootload-entry hide"><span className="bootload-spec">initiating Pip-Boy system boot sequence...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Version 3.0.1 firmware</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Memory check: 512 MB OK</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">CPU detected: Vault-Tec TM Quantum Processor</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">CPU features: Pip-OS Integration, Pip-Net Connectivity</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Scanning Pip-Boy peripherals...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Geiger counter:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Radio module:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Map data reader:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Net transceiver:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Vital signs monitor:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Inventory database:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Environmental sensor array:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Weapon status tracker:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Quest log interface:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy camera system:</span><span className="bootload-spec-status hide"> [ DETECTED ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Activating Pip-Boy components...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Geiger counter calibration...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Radio signal acquisition...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Loading map data...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Establishing Pip-Net connection...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- initiating vital signs monitor...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Accessing inventory database...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- initiating environmental sensors...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Weapon status synchronization...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Loading quest log interface...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy camera system activation...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Booting Pip-OS...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- initiating Pip-OS kernel...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Loading Pip-OS modules...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Configuring Pip-OS environment...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Pip-Boy system booted successfully.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">initiating Pip-Boy interface...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Type &apos;help&apos; for assistance.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Checking for updates...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-OS update available: v3.0.2</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Map data update available: Region 3.0.5</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Radio signal database update available</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Downloading updates...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Downloading Pip-OS update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Downloading map data update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Downloading radio signal database update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Installing updates...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Installing Pip-OS update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Installing map data update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Installing radio signal database update...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Updates installed successfully.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Pip-Boy system ready for use.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Enjoy your journey, Vault Dweller!</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">initiating Pip-Boy applications...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Cast launcher:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Chat messenger:</span><span className="bootload-spec-status hide failed"> [ ERROR ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Maps navigation:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Tunes music player:</span><span className="bootload-spec-status hide failed"> [ ERROR ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Workshop utility:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Stats analytics:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Scanner tool:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Notes memo pad:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Calendar organizer:</span><span className="bootload-spec-status hide"> [ READY ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy Pip-Contacts address book:</span><span className="bootload-spec-status failed"> [ ERROR ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Applications initialized successfully.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Checking Pip-Boy diagnostics...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Geiger counter: Normal</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Radio module: Functional</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Net transceiver: Online</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Vital signs monitor: Nominal</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Environmental sensors: Operational</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Weapon status tracker: Active</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Quest log interface: Functional</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Pip-Boy camera system: Operational</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Diagnostics complete.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Scanning for nearby Pip-Net signals...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Found Pip-Net access point: Vault-Tec mainframe</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Found Pip-Net access point: Settlement data relay</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Found Pip-Net access point: Brotherhood of Steel outpost</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Found Pip-Net access point: Raider camp network</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Pip-Net signals detected.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Synchronizing Pip-Net data...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Syncing settlement status updates...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Syncing Brotherhood of Steel intel...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">- Syncing Raider camp activity reports...</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Pip-Net data synchronized.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Pip-Boy system fully operational.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Welcome, Vault Dweller!</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Have a safe journey, Vault Dweller!</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
      </div>
    </div>
  )
}
