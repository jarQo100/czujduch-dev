import { Component, OnInit } from '@angular/core';

import { TopAlertService } from './topalert.service';
import { TopAlertModel } from './topalert.model';

@Component({
    selector: 'top-alert',
    templateUrl: './topalert.component.html',
    styleUrls: ['./topalert.component.css']
})
export class TopAlertComponent implements OnInit{

    constructor(private topAlertService: TopAlertService){}

    display = 'none';
    model: TopAlertModel;

    alertClose(){
        this.display = 'none';
    }

        ngOnInit() {
        this.topAlertService.alertOccurred
            .subscribe(
            (modalModel: TopAlertModel) => {
                this.model = modalModel;
                this.display = 'block';
                
                setTimeout(() => {
                    this.display = 'none';
                }, 3000);
                
            }
            );
    }


} 