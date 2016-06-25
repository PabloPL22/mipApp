import {Injectable} from '@angular/core';
import * as bluetooth from 'nativescript-bluetooth';
import {TimerWrapper} from '@angular/core/src/facade/async';

const UUID_MIP:string = '<WRITE DOWN HERE THE UUID OF YOUR MIP ROBOT>';
const SERVICE_MIP:string ='ffe5';
const CHARACTERISTIC_MIP:string ='ffe9';
const TIMEOUT_CONNECTION:number = 300000

@Injectable()
export class BlueToothMip {
    
    private _connPromise = null;

    private _connect () {
        let self = this;
        self._connPromise = new Promise (function (resolve, reject) {
           bluetooth.connect({
               UUID: UUID_MIP,
               onConnected: function () {
                   resolve();
                   TimerWrapper.setTimeout(function () {
                       bluetooth.disconnect({
                           UUID:UUID_MIP
                       });
                   },TIMEOUT_CONNECTION);
               },
               onDisconnected: function () {
                   self._connPromise = null;
               }
           });
        });
    }

    move (codeMove:number, codeSpeed:number, codeWtf:number, cb:any) {

        let move:string = '0x0' + new Number(codeMove).toString(16);
        let speed:string = (codeSpeed)?'0x0' + new Number(codeSpeed).toString(16):'';
        let wtf:string = (codeWtf)?'0x0' + new Number(codeWtf).toString(16):'';

        let valueWrite:string = move + ',' + speed + ',' + wtf;
        

        if (!this._connPromise){
            this._connect();
        }

        this._connPromise.then(function () {
            bluetooth.write({
                peripheralUUID:UUID_MIP,
                serviceUUID:SERVICE_MIP,
                characteristicUUID:CHARACTERISTIC_MIP,
                value: valueWrite
            }).then(function () {
                cb();
            }).then(function (error) {
                cb(error);
            });
        }, function (error) {
            cb(error);
        });
    }
}