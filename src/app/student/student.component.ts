import {Component} from "@angular/core";
import {Student} from "../Models/Student";
import {StudentService} from "../services/student.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "student",
    templateUrl: "./student.component.html",
    styleUrls: ["./student.component.css"],
    providers: [Student]
})
export class StudentComponent {
    student: Student;
    isReadOnly: boolean;

    constructor( private route: ActivatedRoute, private router: Router, private studentService:StudentService ) {
        this.isReadOnly = true;
    }

    ngOnInit() {
        this.route.params.forEach ((params: Params) => {
            let id = +params['id'];

            this.studentService.getStudent(id).subscribe((student) => {this.student = student;});
        });
    }

    checkStudent() {
        return typeof this.student !== 'undefined';
    }

    toggleEditStudent() {
        this.isReadOnly = !this.isReadOnly;
    }

    saveStudent() {
        this.studentService.saveStudent(this.student).subscribe((msg) => { console.log(msg)});
        this.toggleEditStudent();
    }
}