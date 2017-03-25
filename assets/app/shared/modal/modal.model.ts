export class ModalModel {
    constructor(
        public title: string, 
        public message: string,
        public button?: string,
        public closebutton?: string) {}
}

export class ConfirmModel {
    constructor(
        public confirm: Boolean, 
        ) {}
}