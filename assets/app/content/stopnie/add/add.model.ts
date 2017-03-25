export class Stopien {
    constructor(
                public name: string,
                public type: string,
                public work: string,
                public dateBegin: Date,
                public commandBegin: string,
                public dateEnd: Date,
                public commandEnd: string,
                public guide: string,
                public whoGive: string,
                public description: string,
                public userId: string,
                public id?: number
                ) {}
}
