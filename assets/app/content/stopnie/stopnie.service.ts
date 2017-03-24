import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Stopien } from "./add/add.model";

@Injectable()
export class StopnieService {
    private stopiens: Stopien[] = [];
    
    constructor(private http: Http) {}

    add(stopien: Stopien) {
        const body = JSON.stringify(stopien);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/panel/add', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    list(){
        const token = localStorage.getItem('token')
            ? localStorage.getItem('token')
            : '';
        
        const data = {
            'token': token,
        }
        const body = JSON.stringify(data);    
        const headers = new Headers({'Content-Type': 'apllication/json'});
        return this.http.post('http://localhost:3000/panel/list' + token, body, {headers: headers})
             .map((response: Response) => {
                const list = response.json().obj;
                let transformedStopienList: Stopien[] = [];

                for (let res of list) {
                    transformedStopienList.push(new Stopien(
                        res.name,
                        res.type,
                        res.work,
                        res.dateBegin,
                        res.commandBegin,
                        res.dateEnd,
                        res.commandEnd,
                        res.guide,
                        res.whoGive,
                        res.description,
                        res.userId,
                        res.id));
                }
                this.stopiens = transformedStopienList;
                return transformedStopienList;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    delete(id:number){

        const token = localStorage.getItem('token')
            ? '' + localStorage.getItem('token')
            : '';
        return this.http.delete('http://localhost:3000/panel/delete/' + token + '/' + id)
            .map((response: Response) => {  
                const list = response.json().obj;
                let transformedStopienList: Stopien[] = [];

                for (let res of list) {
                    transformedStopienList.push(new Stopien(
                        res.name,
                        res.type,
                        res.work,
                        res.dateBegin,
                        res.commandBegin,
                        res.dateEnd,
                        res.commandEnd,
                        res.guide,
                        res.whoGive,
                        res.description,
                        res.userId,
                        res.id));
                }
                this.stopiens = transformedStopienList;
                return transformedStopienList;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    

}
