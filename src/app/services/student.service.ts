import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {AppConfig} from "../config/appConfig";
import {Observable} from 'rxjs/Rx';
import {Student} from "../Models/Student";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {
    private getStudentsRoute: "/students.php"; 

    constructor (private http: Http) {

    }

    getStudents(): Observable<Student> {
        console.log(`${AppConfig.apiUrl}/${this.getStudentsRoute}`);
        return this.http.get(`${AppConfig.apiUrl}/${this.getStudentsRoute}`).map((student:Response) => {
            let res = student.json();
            console.log(student);
            return new Student(res.name, res.surname, res.group);
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}