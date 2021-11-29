# PokeList

## Installation

After cloning the repo, open a Terminal in the repo folder and run:

```
yarn install
```

When installation is finished, run:

```
yarn start
```

This will launch an Expo Server on your computer. You can access the server through a popup that will launch in a web browser, or through a menu that will appear in your Terminal.

### Physical iOS or Android Devices

Download Expo Go through the Apple or Google App Store.

With Expo Go installed, hover over QR code with camera. A popup will ask if you want to open Expo Go, which will launch the app.

Note: Your device needs to be on same WiFi network as the computer running your server. The Expo Go app will throw an error if your device is not connected.

### Simulators

If you do not already have a simulator installed, you can use these guides to download one:

[iOS simulator](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/iOS_Simulator_Guide/GettingStartedwithiOSSimulator/GettingStartedwithiOSSimulator.html)

[Android simulator](https://www.alphr.com/run-android-emulator/)

With the simulator installed, type ‘i’ in the command line to download Expo Go and launch the app on an iOS simulator or ‘a’ for an Android simulator. 


## Testing:

To run a single test, open a new Terminal window in the repo directory and run:

```
yarn test
```

To continuously check the status of the tests, open a new Terminal window in the repo directory and run:

```
yarn watchTests 
```

## Usage Notes:

This setup was only tested on MacOS. Windows and Linux performance is unknown at this time.

Reloading the app can be simulated by entering Expo Dev Tools and clicking ‘Reload’. 
You can navigate to the Expo Dev Tools menu by shaking your device, or simulating a shake on a simulator. 

On MacOS, shaking a simulator is done with control + ⌘+ z on iOS simulator, command + M on Android simulator.
