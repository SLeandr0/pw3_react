import { useState } from "react"

const GestorDados = () => {
    
    let somaNumero = 10

    const [numero, setNumero] = useState(11)

    console.log('Valor de Hook: ' + numero)
    return(
        <div>
            <p>
                Valor de número é: {somaNumero}.
            </p>
            <button onClick={() => (somaNumero = 15)}>Muda valor</button>
            <p>
                Valor de Hook: {numero}
            </p>
            <button onClick={() => setNumero(25)}>Muda por Hook</button>
        </div>
    )
}

export default GestorDados