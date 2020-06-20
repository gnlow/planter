//@deno-types="https://unpkg.com/xxhash-wasm/types.d.ts"
import xxhash from "https://unpkg.com/xxhash-wasm/esm/xxhash-wasm.js"

const planter = async (seed: number) => await xxhash().then(({h32}: any) => {
    return parseInt(
        h32(
            `${String(seed)}`
        ), 
        16) / 0xffffffff
})

console.log(await planter(Math.random()))