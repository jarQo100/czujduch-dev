import { EventEmitter } from "@angular/core";
import { ModalModel, ConfirmModel } from './modal.model'

export class ModalService {
    modalOccurred = new EventEmitter<ModalModel>();
    confirmResult = new EventEmitter<ConfirmModel>();

    handleError(modalModel: any) {
        const errorData = new ModalModel(modalModel.title, modalModel.message, modalModel.button, modalModel.closebutton);
        this.modalOccurred.emit(errorData);
    }

    confirmRes(res: any){
        const body = new ConfirmModel(res.confirm);
        this.confirmResult.emit(body);
    }

    
}

