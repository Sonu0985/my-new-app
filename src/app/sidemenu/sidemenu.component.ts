import { Component } from '@angular/core';

@Component({
    selector:'side-menu',
    templateUrl:'./sidemenu.component.html',
    styleUrls:['./sidemenu.component.css']
})


export class sidemenuComponent{
    menuItemName:any[]=[
        {"name":"HOME"},
        {"name":"MESSAGE"},
        {"name":"PHOTOS"},
        {"name":"DONATION"},
        {"name":"ABOUT US"}];

}