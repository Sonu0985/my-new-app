import { Component } from '@angular/core';
@Component({
selector:'main-screen',
templateUrl:'./mainscreen.component.html',
styleUrls:['./mainscreen.component.css']
})


export class mainscreenComponent{

paragraphContent: any[]=[
    {"content":'We are raised to be self sufficient in this world, but we all need love and guidance in our lives. Surrender your ways to the Guru, you can save yourself a lot of time and trouble. Just let go and let God work miracles in your life.'},
    {"content":'Relying on your own cleverness you missed your way; a guide is always necessary to show us the right way in small or great matters; and no quest can be successfully carried out on an empty stomach. Unless God wills it, no one meets us on the way. Do not discard offers of food; served dish should not be thrust away. Offers of bread and food should be regarded as auspicious signs of success'}] 


imageDetails:any[]=[
    {"imageUrl":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21034356_602082460179458_257242063617235103_n.jpg?oh=0084e21ce8e863bdbeaf255d8e999023&oe=5A183A04",
     "imageTitle":"Sai Baba Picture",
     "imageWidth":"10",
     "imageMargin":"2"
    },
    {"imageUrl":"assets/Donate.png",
    "imageTitle":"PayOnline Image",
    "imageWidth":"10",
    "imageMargin":"2"
   }]

}
