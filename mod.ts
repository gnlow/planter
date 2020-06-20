//@deno-types="https://unpkg.com/xxhash-wasm/types.d.ts"
import xxhash from "https://unpkg.com/xxhash-wasm/esm/xxhash-wasm.js"

const hash = async (seed: number, index: number) => await xxhash().then(
    ({h32}: any) => 
        parseInt(
            h32(
                `${String(seed)} ${index}`
            ), 
            16
        ) / 0xffffffff
)

export default (seed: number) => 
    new Proxy({
        async *[Symbol.asyncIterator](){
            let index = 0
            while(true){
                yield await hash(seed, index++)
            }
        }
    } as {
        [index: number]: Promise<number>
        [Symbol.asyncIterator]: AsyncGeneratorFunction
    }, {
        get: async (target, index: number) => {
            if(typeof index == "number") {
                return await hash(seed, index)
            }
        }
    })