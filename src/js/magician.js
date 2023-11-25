
import { Daemon } from "./daemon";

export class Magician extends Daemon{
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}