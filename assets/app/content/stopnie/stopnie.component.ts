import { Component, OnInit } from '@angular/core';
import { StopnieService } from './stopnie.service';

import { Stopien } from './add/add.model';

@Component({
    selector: 'stopnie',
    templateUrl: './stopnie.component.html'
})
export class StopnieComponent implements OnInit {

    list: Stopien[];

    constructor(private StopnieService: StopnieService, ) { }



    ngOnInit() {
        this.StopnieService.list()
            .subscribe(
                (results: Stopien[]) => {
                     this.list = results;
                },
                    error => console.error(error)
            );
    }

    delete(row){
        this.StopnieService.delete(row.id)
            .subscribe(
                (results: Stopien[]) => {
                     this.list = results;
                },
                    error => console.error(error)
            );
    }


}