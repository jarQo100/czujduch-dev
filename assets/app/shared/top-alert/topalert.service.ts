import { EventEmitter } from "@angular/core";
import { TopAlertModel } from './topalert.model'

export class TopAlertService {
    alertOccurred = new EventEmitter<TopAlertModel>();

    handleAlert(modalModel: any) {
        const alertData = new TopAlertModel(modalModel.title);
        this.alertOccurred.emit(alertData);
    }

    
}

