import {xxHash32} from "https://raw.githubusercontent.com/gnlow/deno-xxhash/master/mod.ts"

const hash = (seed: number, index: number) => 
    xxHash32(`${String(seed)} ${index}`) / 0xffffffff

export default (seed: number) => 
    new Proxy({
        *[Symbol.iterator](){
            let index = 0
            while(true){
                yield hash(seed, index++)
            }
        }
    } as {
        [index: number]: number
        [Symbol.iterator]: GeneratorFunction
    }, {
        get: (target, index: number) => {
            if(index in target){
                return target[index]
            }else{
                if(typeof index == "number") {
                    return hash(seed, index)
                }
            }
        }
    })