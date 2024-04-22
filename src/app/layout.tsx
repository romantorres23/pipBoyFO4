import { cookies } from 'next/headers'
import type { Metadata } from "next";
import "./styles/all.scss";

import BootTrigger from './BootTrigger/page';
import BootLoaderAnimation from './BootLoaderAnimation/page';
import OSInfo from './OSInfo/page';
import Initiating from './Initiating/page';

export const metadata: Metadata = {
  title: "Pip-Boy 3000",
  description: "Pip-Boy from Fallout 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bootedPreviously = cookies().get("bootedPreviously")

  if (bootedPreviously) {
    return (
      <html lang="en">
        <body>
          <div className="container">
            <div className="dashboard">
              {children}
            </div>
          </div>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="landing">
            <BootTrigger />
          </div>
          <div className="hide step-1">
            <BootLoaderAnimation />
          </div>
          <div className="hide step-2">
            <OSInfo />
          </div>
          <div className="hide step-3 initiating">
            <Initiating />
          </div>
          <div className="hide dashboard">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
