import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { ModalModel, ConfirmModel } from './modal.model'

@Component({
    selector: 'modal-popup',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    modal: ModalModel;
    display = 'none';

    constructor(private modalService: ModalService) { }

    onModalHandled() {
        this.display = 'none';
    }

    onModalHandledConfirm(){
        this.display = 'none';
        this.modalService.confirmRes(new ConfirmModel(true));
    }

    ngOnInit() {
        this.modalService.modalOccurred
            .subscribe(
            (modalModel: ModalModel) => {
                console.log(modalModel);
                this.modal = modalModel;
                this.display = 'block';
            }
            );
    }
} 