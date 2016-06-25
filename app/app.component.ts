import {Component} from "@angular/core";
import {BlueToothMip} from "./bluetooth.service";
import dialogs = require("ui/dialogs");

@Component({
    selector: "my-app",
    templateUrl: "app.template.html",
    providers: [BlueToothMip]
})
export class AppComponent {
    public orderSent: string;
    private _WTF:number = 3000;
    private _SPEED:number = 20;
    private _ERROR_TITLE:string = "Error";
    private _MSG_BTN:string = "Close";
    public speedSliderValue:number = this._SPEED;
    
    constructor(private _blueToothMip:BlueToothMip){}

    public get message(): string {
        if (this.orderSent) {
            return "Order sent -> "+this.orderSent;
        }
    }

    // The robot moves forward
    public goForward(){
        this.sendOrder("Move forward",113, this.speedSliderValue, this._WTF);
    }

    // The robot moves backward
    public goBackward(){
        this.sendOrder("Move backward",114, this.speedSliderValue, this._WTF);
    }

    // The robot turns left
    public turnLeft(){
        this.sendOrder("Turn left",115, this.speedSliderValue, this._WTF);
    }

    // The robot turns right
    public turnRight(){
        this.sendOrder("Turn right", 116, this.speedSliderValue, this._WTF);
    }

    // The robot stops moving
    public stop(){
        this.sendOrder("Stop moving", 119);
    }

    private sendOrder(msg:string, move:number, speed:number= null, wtf:number= null){
        this.orderSent = msg;
        this._blueToothMip.move(move,speed,wtf*1000,function (error) {
           if (error) {
               dialogs.alert({
                   title: this._ERROR_TITLE,
                   message: error.message,
                   okButtonText: this._MSG_BTN
               });
           }
        });
    }

}
