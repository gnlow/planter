# planter
Create numbers from one seed
## Use (Deno)
```ts
import planter from "https://raw.githubusercontent.com/gnlow/planter/master/mod.ts"

const plant = planter(0.12345)
const [first, second] = plant

console.log(first, second) // 0.06505171769881894 0.9140122807384498
console.log(plant[0], plant[1]) // 0.06505171769881894 0.9140122807384498
```
