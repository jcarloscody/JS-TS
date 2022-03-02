//passar uma funcao como parametro em outra funcao

function exec(fn, a, b) {
    return fn(a, b)
}

console.log(exec((a, b) => a + b, 1, 2))

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

setInterval(function () {
    console.log('Exec 3...')
}, 5000)