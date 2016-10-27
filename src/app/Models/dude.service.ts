import { Injectable } from '@angular/core';

@Injectable()
export class Dude {
    private name: string;
    private gaynessLevel: number;

    constructor(name: string, gaynessLevel: number) {
        this.name = name;
        this.gaynessLevel = gaynessLevel;
    }

    getName() {
        return this.name;
    }

    getGaynessLevel() {
        return this.gaynessLevel;
    }
}