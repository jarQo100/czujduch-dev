import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Stopien } from "./add.model";
import { StopnieService } from '../stopnie.service';

@Component({
    selector: 'dodaj-stopien',
    templateUrl: './add.component.html'
})
export class AddStopienComponent{
    myForm: FormGroup;

    constructor() {}

    onSubmit() {
        const stopien = new Stopien(
            this.myForm.value.name, 
            this.myForm.value.type,
            this.myForm.value.work,
            this.myForm.value.dateBegin,
            this.myForm.value.commandBegin,
            this.myForm.value.dateEnd,
            this.myForm.value.commandEnd,
            this.myForm.value.guide,
            this.myForm.value.whoGive,
            this.myForm.value.description,
            localStorage.getItem('userId')
        );


        this.StopnieService.add(stopien)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => console.error(error)
            );
        this.myForm.reset();
    }


    ngOnInit() {
        this.myForm = new FormGroup({
            dateBegin: new FormControl(null),
            dateEnd: new FormControl(null),
                //Validators.pattern("(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d")
           // ),
            commandBegin: new FormControl(null, Validators.required),
            commandEnd: new FormControl(null),
            guide: new FormControl(null, Validators.required),
            whoGive: new FormControl(null, Validators.required),
            description: new FormControl(null),
            type: new FormControl(null),
            name: new FormControl(null, Validators.required),
            work: new FormControl(null, Validators.required)
        });
    }
}