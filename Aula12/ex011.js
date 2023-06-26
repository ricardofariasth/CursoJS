var idade = 71
if (idade < 16) {
    console.log('Nao vota')
} else {
    if (idade < 18) {
        console.log ('Voto opcional')
    } else {
        if (idade >= 18 && idade < 65) {
            console.log('Vota')
        } else {
            if (idade >= 65 && idade < 70) {
                console.log('Voto opcional')
            } else {
                console.log('Nao vota')
            }
        }
    }
}