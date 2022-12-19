import React, { useState } from "react";
import HomePage from "./homepage";
import isologo from '../images/isologo.png'

import { ReactInternetSpeedMeter } from 'react-internet-meter'

export default function InternetSpeedTest() {
  const [wifiSpeed, setwifiSpeed] = useState("Checking ... ");

  return (
    <div>
      <ReactInternetSpeedMeter
        txtSubHeading={"internet converted to MB is " + wifiSpeed + " MB/s"}
        outputType="alert"
        customClassName={null}
        txtMainHeading="Your "
        pingInterval={3000} // milliseconds
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={100}
        imageUrl="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png"
        downloadSize="2550420" //bytes
        callbackFunctionOnNetworkDown={(speed) =>
          console.log(`Internet speed is down ${speed}`)
        }
        callbackFunctionOnNetworkTest={(speed) => setwifiSpeed(speed)}
      />
      <HomePage wifiSpeed={wifiSpeed} />
      <div className="firma">
        <div className="flex">
          <a href="http://caballerolucas.com" target="_blank" rel="noreferrer"><img className="logo" src={isologo} alt="Isotipo Lucas Caballero" /></a>
        </div>
      </div>
    </div>
  );
}