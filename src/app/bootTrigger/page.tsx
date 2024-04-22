'use client'

import Image from 'next/image'
import Cookies from 'universal-cookie';

// Images
import joinVaulttec from '../assets/images/join.png';

export default function Page() {
  const startBootSequence = () => {
    const landing: HTMLElement | null = document.querySelector('.landing');
    const stepOne: HTMLElement | null = document.querySelector('.step-1');

    if (landing) {
      landing.classList.add('hide');
    }
    if (stepOne) {
      stepOne.classList.toggle('hide');
      // Get bootloader entries to remove class hide - display individual boot entry
      const bootloadEntries = document.querySelectorAll<HTMLElement>('.bootload-entry');

      for (let index = 0; index < bootloadEntries.length; index++) {
        const bootloadEntry = bootloadEntries[index];
        setTimeout(() => {
          bootloadEntry.classList.toggle('hide');

          const specStatus = bootloadEntry.querySelector('.bootload-spec-status');

          if (specStatus) {
            setTimeout(() => {
              specStatus.classList.toggle('hide');
            }, 200);
          }

          if (index === bootloadEntries.length - 1) {
            // set the end status for the step 1 animation here..
            setTimeout(() => {
              const stepOne = document.querySelector('.step-1') as HTMLElement;
              if (stepOne) {
                stepOne.classList.toggle('hide');
                sequenceTwo();
              }
            }, 100);
          }

          bootloadEntry.scrollIntoView();
        }, 10 * index);
      }

    }
  };
  const sequenceTwo = () => {
    // Using animationend event listener to mark the end of animation
    const stepTwo = document.querySelector('.step-2') as HTMLElement;

    stepTwo.classList.toggle("hide");

    const targetNode = document.querySelector<HTMLElement>(".os-load-rom");
    const animationEnd = () => {
      // Set the end state of animation for step 2 here...
      setTimeout(() => {
        stepTwo.classList.toggle("hide");
        sequenceThree();
      }, 500);
    };

    if (targetNode) {
      targetNode.addEventListener("animationend", animationEnd);
    }

  };
  const sequenceThree = () => {
    const stepThree = document.querySelector('.step-3') as HTMLElement;

    stepThree.classList.toggle('hide');

    const setTimerforpipboy = () => {
      setTimeout(() => {
        stepThree.classList.toggle('hide');
        sequenceFour();
      }, 2200);
    };

    setTimerforpipboy();
  };
  const sequenceFour = () => {
    const stepFour = document.querySelector(".dashboard");

    if (stepFour) {
      const cookies = new Cookies();
      const oneDay = 24 * 60 * 60 * 1000; // in milliseconds
      const expirationDate = new Date(Date.now() + oneDay); // Current time + 1 day

      stepFour.classList.toggle("hide");
      cookies.set('bootedPreviously', 'true', { path: '/', expires: expirationDate });
    }
  };

  return (
    <>
      <Image
        src={joinVaulttec}
        alt="Join the Vault-tec"
        className="join-vaulttec-img"
        priority
      />
      <button className="crt join-vaulttec-btn"
        onClick={startBootSequence}>JOIN</button>
    </>
  );
}