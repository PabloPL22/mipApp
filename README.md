#MIP App
##Introduction
MIP app is an hibrid and native mobile application coded in NativeScript and Angular 2, to learn how, this two frameworks,
can use the blue tooth of the devices for IoT projects. In this case, we have coded an app to control a [MIP Robot](http://wowwee.com/mip/) from Android and IOS smartphones

##ngBraves
ngBraves is a group of 5 developers who do meetings to agree innovation project which
are out of the context of management software. Our objective is learn, promote
the technology and share it with the community

NgBrave are:
* [José Manuel Garcia](https://twitter.com/semagarcia)
* [Victor Ocariz](https://twitter.com/vocarizm)
* [Fernando Martin](https://twitter.com/fer_martyni)
* [Pablo Pérez](https://twitter.com/PabloPL27)
* [Adrian Ferreres](https://twitter.com/ardiadrianadri)

##How install MIP App

Before anything, you should install NativeScript-cli in the computer where you are planning
compile and run the code. To do that just follow the [official guide of NativeScript](http://docs.nativescript.org/angular/start/quick-setup).
Once you have NativeScript-cli in your local, only need to clone the repository:

```
git clone https://github.com/ngBraves/mipApp
```
And install the dependencies
```
npm install
```

##How configure MIP App
To try the MIP app, first, you need a MIP Robot. Think this is only a proof of concept. Our intention never was
to code a complete and configurable app to comunicate our mobile devices with any machine that is around us.

So, for the lucky ones that have a MIP with them, the first step is to get the UUID. We use the command
*cylon-ble-scan* of the library [cylon-ble](https://github.com/hybridgroup/cylon-ble) for it. If your SO is Windows,
it may be necessary to change the drivers of you blue tooth device to use it from nodejs. We found a video that explain how to do it:

[Bluetooth LE with Node.js and Noble on Windows](https://www.youtube.com/watch?v=mL9B8wuEdms)

Once you know the UUID, copy and paste its value in the line 5 of the file app/bluetooth.service.ts:
```
const UUID_MIP:string = '1C:05:43:5C:E3:55';
```
Just change de value of the constant UUID_MIP by the value of your MIP and that's it; the MIP App can talk with your
robot


##How run MIP App
To run MIP App you need to connect your smartphone in developer mode at your computer. To check if your device is detected by
NativeScript, simply execute the following command:
```
tns device
```
If your smartphone is ready, it will show on the console:
```
┌───┬──────────────┬──────────┬───────────────────┬────────┬───────────┐
│ # │ Device Name  │ Platform │ Device Identifier │ Type   │ Status    │
│ 1 │ osprey_retes │ Android  │ xxxxxxxxxx        │ Device │ Connected │
└───┴──────────────┴──────────┴───────────────────┴────────┴───────────┘

```
To install MIP app in your android device just run the next command
```
tns run android
```
If you have an apple device, change *andrido* with *ios*
```
tns run ios
```
(do not forget to switch on the bluetooth of your smartphone. It always happen to me...)

##Video demo
For people that do not have a MIP robot to play, we recorded a video with a demo of how the app works:

[video demo]()

##links
These are the documentation that we read to code the app:
* [Angular for NativeScript](https://www.nativescript.org/nativescript-is-how-you-build-native-mobile-apps-with-angular)
* [nativescript-bluetooth library](https://github.com/EddyVerbruggen/nativescript-bluetooth)
* [Cylonjs for mip](https://cylonjs.com/documentation/platforms/mip/)
* [Angular 2 official docs](https://angular.io/docs/ts/latest/quickstart.html)

Thank you at all the authors of these articles. Without them, we could not have a lot of funny moments