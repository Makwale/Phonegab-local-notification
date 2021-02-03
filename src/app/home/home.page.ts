import { Component } from '@angular/core';

import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private localNotification: PhonegapLocalNotification) {}

  test(){
    // this.localNotification.requestPermission().then(
    //   (permission) => {
    //     if (permission === 'granted') {
    //       alert("Granted");
    //       // Create the notification
    //       this.localNotification.create('My Title', {
    //         tag: 'message1',
    //         body: 'My body',
    //         icon: 'assets/icon/favicon.ico'
    //       });
    
    //     }else{
    //       alert("Not Granted")
    //     }

      
    //   }
    // );

    this.localNotification.create('My Title', {
              tag: 'message1',
              body: 'My body',
              icon: 'assets/icon/favicon.ico'
    });
  }

}
