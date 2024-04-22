import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/all.scss";
import { cookies } from 'next/headers'

// Components
import BootTrigger from './BootTrigger/page';
import BootLoaderAnimation from './BootLoaderAnimation/page';
import OSInfo from './OSInfo/page';
import Initiating from './Initiating/page';

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
  const bootedPreviously = cookies().get("bootedPreviously")

  // Check if the cookie exists and its value
  if (bootedPreviously) {
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
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
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
