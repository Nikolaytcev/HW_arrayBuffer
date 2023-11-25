import { Character } from "../character";
import { Magician } from "../magician";
import { Daemon } from "../daemon"; 
import { ArrayBufferConverter } from "../bufferConverter";

test.each([[new Daemon('ssdf1', 'Daemon').setStoned().setAttack(5), {name: 'ssdf1', type: 'Daemon', health: 100, level: 1, attack: 13, defence: 25, stoned: false}],
           [new Daemon('ssdf2', 'Daemon').setAttack(5), {name: 'ssdf2', type: 'Daemon', health: 100, level: 1, attack: 15, defence: 25, stoned: false}],
           [new Daemon('ssdf3', 'Daemon').setAttack(11), {name: 'ssdf3', type: 'Daemon', health: 100, level: 1, attack: 0, defence: 25, stoned: false}],
           [new Magician('magician1', 'Magician').setAttack(11), {name: 'magician1', type: 'Magician', health: 100, level: 1, attack: 0, defence: 40, stoned: false}],
           [new Magician('magician2', 'Magician').setAttack(6), {name: 'magician2', type: 'Magician', health: 100, level: 1, attack: 5, defence: 40, stoned: false}],
           [new Magician('magician3', 'Magician').setStoned().setAttack(6), {name: 'magician3', type: 'Magician', health: 100, level: 1, attack: 0, defence: 40, stoned: false}],
           [new Magician('magician4', 'Magician').setStoned().setAttack(3), {name: 'magician4', type: 'Magician', health: 100, level: 1, attack: 2, defence: 40, stoned: false}]
          
        ])("test attack with stoned and without stoned", (hero, answer) => {expect(hero).toEqual(answer)}
    );

test("test bufferConverter", () => {
    expect(new ArrayBufferConverter().toString('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})
