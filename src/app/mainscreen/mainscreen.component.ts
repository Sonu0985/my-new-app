import { Component } from '@angular/core';
@Component({
selector:'main-screen',
templateUrl:'./mainscreen.component.html',
styleUrls:['./mainscreen.component.less']
})


export class mainscreenComponent{

mainImageUrl:string='assets/SaiBaba-message.jpg';
mainImageTitle:string='Sai Message';

visionDatas:any[]=[
    {
        "href":'Shree Sai Baba Samagik Kalyan Trust Education Center',
        "Detail":'Vision to provide free and quality education to destitute family'
    },
    {
        "href":'Shree Sai Baba Samagik Kalyan Trust Health Care',
        "Detail":'Vision to provide free and quality health care to everyone in need'
    },
    {
        "href":'Shree Sai Baba Samagik Kalyan Trust Water Plant',
        "Detail":'Vision to provide free clean drinking water to everyone'
    },
    {
        "href":'Shree Sai Baba Samagik Kalyan Trust Retirement Home',
        "Detail":'Vision to provide food and shelter for senior citizens'
    },
    {
        "href":'Other Services',
        "Detail":'Meal Service, Sai Puja Gathering, Recreation Activities'
    }
]
imageDetails:any[]=[
    {"imageUrl":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21034356_602082460179458_257242063617235103_n.jpg?oh=0084e21ce8e863bdbeaf255d8e999023&oe=5A183A04",
     "imageTitle":"Sai Baba Picture",
     "imageHeight":"18.8",
     "imageWidth":"16",
     "imageMarginleft":"0.5",
     "imageMargintop":"0.1",
     "cursor":"pointer",
    },
    {"imageUrl":"assets/Donate.png",
    "imageTitle":"PayOnline Image",
    "imageWidth":"10",
    "cursor":"pointer",
    "imageMarginleft":"3.5",
    "imageMargintop":"0.1"
   }]

}
