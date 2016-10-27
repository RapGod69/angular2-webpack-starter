import {Injectable} from "@angular/core";

@Injectable()
export class Student {
    private name: string;
    private surName: string;
    private group: number;

    constructor(name: string, surName: string, group: number) {
        this.name = name;
        this.surName = surName;
        this.group = group;
    }

    getName() {
        return this.name;
    }

    getSurName() {
        return this.surName;
    }

    getGroup() {
        return this.group;
    }
}