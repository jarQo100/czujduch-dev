import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Stopien } from "./add.model";
import { StopnieService } from './../stopnie.service';

import { Router, ActivatedRoute } from '@angular/router';

import { TopAlertService } from './../../../shared/top-alert/topalert.service';
import { TopAlertModel } from './../../../shared/top-alert/topalert.model';

@Component({
    selector: 'dodaj-stopien',
    templateUrl: './add.component.html'
})
export class AddStopienComponent {

    myForm: FormGroup;
    id;
    sub;

    constructor(
        private StopnieService: StopnieService,
        private topAlertService: TopAlertService,
        private router: Router,
        private route: ActivatedRoute) { }

    onSubmit() {

        var work;
        if(this.myForm.value.work == null) { work = false } else { work = this.myForm.value.work }

        const stopien = new Stopien(
            this.myForm.value.name,
            this.myForm.value.type,
            work,
            this.myForm.value.dateBegin,
            this.myForm.value.commandBegin,
            this.myForm.value.dateEnd,
            this.myForm.value.commandEnd,
            this.myForm.value.guide,
            this.myForm.value.whoGive,
            this.myForm.value.description,
            localStorage.getItem('userId'),
            this.id,
        );


        this.StopnieService.add(stopien)
            .subscribe(
            data => {
                this.topAlertService.handleAlert(
                    new TopAlertModel(
                        "Lista stopni została zaktualizowana!",
                    ));
                this.router.navigateByUrl('/panel/stopnie');
            },
            error => console.error(error)
            );
        this.myForm.reset();
    }

    edit(row) {
        console.log(row);
    }



    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });

        this.myForm = new FormGroup({
            dateBegin: new FormControl(null, [
                Validators.required,
                Validators.pattern("[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])")    
            ]),
            dateEnd: new FormControl(null, Validators.pattern("[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])")),
            commandBegin: new FormControl(null, Validators.required),
            commandEnd: new FormControl(null),
            guide: new FormControl(null, Validators.required),
            whoGive: new FormControl(null),
            description: new FormControl(null),
            type: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required),
            work: new FormControl(null)
        });

        if(this.id){

        this.StopnieService.getStopienById(this.id)
            .subscribe(
            data => {
                //ZJEBANE ROZWIĄZANIE DO POPRAWY W PRZYSZŁOŚCI
                var dateBegin = new Date(data.obj['dateBegin']);
                var dateBeginPrefix = '', dateBeginDatePrefix = '';
                if(dateBegin.getMonth()+1 < 10) { dateBeginPrefix = '0'}
                if(dateBegin.getDate() < 10) { dateBeginDatePrefix = '0'}

                var dateBeginReady = (dateBegin.getFullYear() + '-' + dateBeginPrefix + (dateBegin.getMonth()+1) + '-' + dateBeginDatePrefix + dateBegin.getDate());

                var dateEnd = new Date(data.obj['dateEnd']);
                var dateEndPrefix = '', dateEndDatePrefix = '';
                if(dateEnd.getMonth()+1 < 10) { dateEndPrefix = '0'}
                if(dateEnd.getDate() < 10) { dateBeginDatePrefix = '0'}

                var dateEndReady = (dateEnd.getFullYear() + '-' + dateEndPrefix +  (dateEnd.getMonth()+1) + '-' + dateEndDatePrefix + dateEnd.getDate());

                    this.myForm.setValue({
                        commandBegin: data.obj.commandBegin, 
                        commandEnd: data.obj.commandEnd,
                        dateBegin: dateBeginReady,
                        dateEnd: dateEndReady,
                        name: data.obj.name,
                        type: data.obj.type,
                        work: data.obj.work,
                        guide: data.obj.guide,
                        whoGive: data.obj.whoGive,
                        description: data.obj.description,
                    });
           
            },
            error => console.error(error)
            );


            this.myForm.updateValueAndValidity();
        }
    }
}