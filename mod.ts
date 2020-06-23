import {xxHash32} from "https://raw.githubusercontent.com/gnlow/deno-xxhash/master/mod.ts"
import infiniteArray from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

const hash = (seed: number, index: number) => 
    xxHash32(`${String(seed)} ${index}`) / 0xffffffff

export default (seed: number) => infiniteArray(
        (index: number) => hash(seed, index)
    )