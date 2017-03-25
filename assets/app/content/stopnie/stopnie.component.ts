import { Component, OnInit, EventEmitter } from '@angular/core';
import { StopnieService } from './stopnie.service';

import { Stopien } from './add/add.model';

import { ModalService } from './../../shared/modal/modal.service';
import { TopAlertService } from './../../shared/top-alert/topalert.service';

import { ModalModel, ConfirmModel } from './../../shared/modal/modal.model';
import { TopAlertModel } from './../../shared/top-alert/topalert.model';

@Component({
    selector: 'stopnie',
    templateUrl: './stopnie.component.html'
})
export class StopnieComponent implements OnInit {

    list: Stopien[];
    length: number;
    confirm;

    editEmmiter = new EventEmitter<ConfirmModel>();


    constructor(
        private StopnieService: StopnieService,
        private modalService: ModalService,
        private topAlertService: TopAlertService) { }


    ngOnInit() {

        this.StopnieService.list()
            .subscribe(
            (results: Stopien[]) => {
                this.list = results;
                this.length = this.list.length;
            },
            error => console.error(error)
            );

    }

    delete(row) {

        this.modalService.handleError(
            new ModalModel(
                "Usunięcie stopnia",
                "Czy napewno chcesz usunąć stopień ze swojej listy",
                "TAK, potwierdzam",
                "NIE, zamknij"
            ));

        this.modalService.confirmResult
            .subscribe(
            (res: ConfirmModel) => {
                if (res.confirm) {
                    this.StopnieService.delete(row.id)
                        .subscribe(
                        () => {
                            this.ngOnInit();

                            this.topAlertService.handleAlert(
                                new TopAlertModel(
                                    "Stopień usunięto poprawnie",
                                ));
                                res.confirm = false;

                        },
                        error => console.error(error)
                        );
                }
            },
            err => console.log(err)
            );

    }


}

