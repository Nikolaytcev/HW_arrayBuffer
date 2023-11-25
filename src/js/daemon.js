import { Character } from "./character";

export class Daemon extends Character{
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
        this.stoned = false;
    }

    setStoned() {
        this.stoned = true;
        return this;
    }

    setAttack(step) {
        this.stoned ? this.attack -= Math.ceil(Math.log2(step)*5) : this.attack = Math.ceil(this.attack*(1-(step - 1)/10));
        this.stoned = false;
        if(this.attack < 0){
            this.attack = 0;
        }
            return this;
    }
}

