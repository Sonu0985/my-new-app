import { Component } from '@angular/core';

@Component({
    selector:'vertical-menu',
    templateUrl:'./verticalmenu.component.html',
    styleUrls:['./verticalmenu.component.less']    
})

export class verticalMenuComponent{
    menuItemName:any[]=[
        {"name":"Sai Blog"},
        {"name":"Information"},
        {"name":"On Going Project"},
        {"name":"Future Plan"},
        {"name":"Suggestion"},
        {"name":"News"},
        {"name":"Contact Us"}]
    }