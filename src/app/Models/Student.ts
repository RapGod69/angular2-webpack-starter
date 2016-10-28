import {Injectable} from "@angular/core";

@Injectable()
export class Student {
    private name: string;
    private surName: string;
    private group: number;
    private id: number;

    constructor(name: string, surName: string, group: number, id: number) {
        this.name = name;
        this.surName = surName;
        this.group = group;
        this.id = id;
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

    getId() {
        return this.id;
    }

    toJson() {
        return {
            name: this.name,
            surname: this.surName,
            group: this.group,
            id: this.id
        };
    }

    toUrlEncoding() {
        return `name=${this.name}&surname=${this.surName}&group=${this.group}&id=${this.id}`;
    }
}