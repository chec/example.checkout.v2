import React from 'react';
import { ReactComponent as FootPrintSvg } from '../assets/footprint.svg';

export function Loading() {
  return (
    <div className="absolute absolute--fill flex items-center justify-center">
      <div className="footPrintContainer fill-cherry ">
        <FootPrintSvg />
      </div>
      <p className="font-roboto ttu tracked-mega-1">
        loading...
      </p>
    </div>
  )
}

export function FootPrintsLoading(props) {
  return (
    <div className="FootPrintsLoader fixed absolute-fill w-100 h-100 bg-black-90 flex flex-column items-center justify-center z-max">
      <div className="FootPrintsLoader__prints-container">
        {
         Array.from({length: '8'}).map(() => (
           <div className="FootPrintsLoader__print footPrintContainer fill-cherry">
             <FootPrintSvg />
           </div>
         ))
        }
      </div>
      <p className="absolute medium-text white f6 ttu">
        { props.children || 'processing your order...'}
      </p>
    </div>
  )
}
