import { getBuffer } from "./buffer";

export class ArrayBufferConverter {

    load(data) {
        return getBuffer(data);
    }

    toString(data) {
        let dataView = new DataView(this.load(data));
        let string = "";
        for(let i=0; i < dataView.byteLength; i++) {
            if(i % 2 == 0) {string += String.fromCharCode(dataView.getInt8(i))}
        }
        return string;
    }
}