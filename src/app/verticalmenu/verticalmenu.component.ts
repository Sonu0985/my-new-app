import { Component } from '@angular/core';

@Component({
    selector:'vertical-menu',
    templateUrl:'./verticalmenu.component.html',
    styleUrls:['./verticalmenu.component.css']    
})

export class verticalMenuComponent{
    menuItemName:any[]=[
        {"name":"INFORMATION"},
        {"name":"ON GOING PROJECT"},
        {"name":"FUTURE PLAN"},
        {"name":"SUGGESTION"},
        {"name":"CONTACT US"}]
    }