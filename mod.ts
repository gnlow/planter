import {xxHash32} from "https://raw.githubusercontent.com/gnlow/deno-xxhash/master/mod.ts"
import infiniteArray from "https://raw.githubusercontent.com/gnlow/infinite-array/master/mod.ts"

export const hash = (seed: number, key: string) => 
    xxHash32(`${String(seed)} ${key}`) / 0xffffffff

export default (seed: number) => infiniteArray(
        (index: number) => hash(seed, String(index))
    )