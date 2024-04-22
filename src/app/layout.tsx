import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image'
import "./styles/all.scss";
import { cookies } from 'next/headers'

// Components
import BootTrigger from './bootTrigger/page';
import BootLoaderAnimation from './bootLoaderAnimation/page';

// Images
import successGif from './assets/images/pip-boy-success-animate.gif';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pip-Boy 3000",
  description: "Pip-Boy from Fallout 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const myCookieValue = cookieStore.get('bootedPreviously');

  // Check if the cookie exists and its value
if (typeof myCookieValue === 'string' && myCookieValue === 'true') {
    return ( 
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            <div className="dashboard">
              {children}
            </div>
          </div>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="container">
            <BootTrigger />
            <div className="hide step-1">
              <BootLoaderAnimation />
            </div>
            <div className="hide step-2">
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
            </div>
            <div className="hide step-3 initiating">
              <div className="pipboy-img-container">
                <Image
                  src={successGif}
                  alt="Success"
                  className="crt pipboy-success"
                  priority
                />
              </div>
              <div className="center-initiating-text pipboy-initiating-text">
                <span className="animate-initiating-1">INITIATING</span>
                <span className="animate-initiating-1">.</span>
              </div>
            </div>
            <div className="hide dashboard">
              {children}
            </div>
          </div>
        </body>
      </html>
    );
  }

}