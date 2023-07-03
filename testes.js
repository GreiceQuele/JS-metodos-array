const idades = [18,22,12,15,85,38];

const podeDirigir = idades.filter(idade =>{
    return idade >= 18;
})

console.log(podeDirigir);
console.log(idades);