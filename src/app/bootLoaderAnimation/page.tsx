import React from 'react'

export default function BootLoaderAnimation() {
  return (
    <div className="bootloader-animation">
      <div className="bootload-sequence">
        <div className="bootload-entry hide"><span className="bootload-spec">Starting udev :</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Setting hostname elwood :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Setting up Logical Volume Management : No volume groups found</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Checking filesystems</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">/dev/sda2 : clean, 89739/30457856 files, 2561411/121822976 blocks</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">/dev/sda1 : clean, 39/76912 files, 43648/307200 blocks</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Remounting root filesystem in read-write mode :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Mounting local filesystems :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Enabling local filesystem quotas :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Enabling /etc/fstab swaps :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">Entering non-interactive startup</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">ERROR: Wanpipe configuration file not found :/etc/wanpipe/wanpipe1.conf</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Bringing up loopback interface :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Bringing up interface eth0 :</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Determining IP information for eth0...done.</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting auditd :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting system logger :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">initiating DAHDI hardware modules:</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">wct4xxp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcte43x :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcte12xp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcte13xp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wct1xxp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcte11xp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">r1t1 :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">rxt1 :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wctdm24xxp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcaxx :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcfxo :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wctdm :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">rcbfx :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wcb4xxp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">wctc4xxp :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">xpp_usb :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">D: auto &apos;/sys/bus/dahdi_devices/devices/pci:0000:02:08.0&apos;</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">auto-assign /sys/bus/dahdi_devices/devices/pci:0000:02:08.0</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">Running dahdi_cfg :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting system message bus :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting Avahi daemon...</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Mounting filesystems :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting acpi daemon :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting HAL daemon :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Retrigger failed udev event s</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting Queue callback daemon :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting REST applications daemon :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting dnsmasq :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting sshd :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting xinetd :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting ntpd :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting UPS monitoring :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting mysqld :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting postfix :</span><span className="bootload-spec-status hide failed">[FAILED]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting crond :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting prosody : Started</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting fail2ban :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">Starting jexec servicesStarting Filesystem event daemon</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">Fetching FreePBX settings with gen_amp_conf.php..</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">D: auto &apos;/sys/bus/dahdi_devices/devices/pci:0000:02:08.0&apos;</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">auto-assign /sys/bus/dahdi_devices/devices/pci:0000:02:08.0</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Running dahdi_cfg :</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Dahdi Started</span></div>
        <br />
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">SETTING FILE PERMISSIONS...................Done</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Removing any dangling symlinks</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Dangling symlinks removed</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">STARTING ASTERISK</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Asterisk Started</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting REST applications daemon: </span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Stopping fail2ban: REST Applications module is not licensed.</span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting fail2ban: </span><span className="bootload-spec-status hide"> [ OK ]</span></div>
        <br />
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">&gt; ucp-server@ start /var/www/html/admin/modules/ucpnode/node</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">&gt; node_modules/forever/bin/forever start -m 1 -a -l $ASTLOGDIR/ucp_forever.log -o $ASTLOGDIR/ucp_out.log -e $ASTLOGDIR/ucp_err.log --uid &apos;ucp&apos; index.js</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">warn: --minUptime not set. Defaulting to: 1000ms</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">warn: --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">info: Forever processing file: index.js</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting Queue callback daemon :</span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting prosody: Prosody is already running with PID 1748 </span><span className="bootload-spec-status hide failed">[FAILED]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting XMPP Presence State daemon : </span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <div className="bootload-entry hide"><span className="bootload-spec">Starting /etc/fstab swaps : </span><span className="bootload-spec-status hide">[ OK ]</span></div>
        <br />
        <div className="bootload-entry hide"><span className="bootload-spec">Enter PIPBOY...</span></div>
      </div>
    </div>
  )
}
