import { useState } from 'react'
import banner3 from '../assets/img/5.png'

const AppTamanhoImages = () => {
    const imgPadrao = {
        w: 600,
        h: 240
    }

    const [altura, setAltura] = useState(
        imgPadrao.h
    )
    const [largura, setLargura] = useState(
        imgPadrao.w
    )

    return(
        <div>
            <img src={banner3} alt="Banner de promoções 2" width={largura} height={altura} />
            <div>
                <span>Largura: {largura}</span>  ||   <span>Altura: {altura}</span>
            </div>
            <p>
            <button onClick={() => (setLargura(largura+10))}>Aumenta largura</button>
            <button onClick={() => (setLargura(largura-10))}>Diminui largura</button>
            <button onClick={() => (setAltura(altura+10))}>Aumenta altura</button>
            <button onClick={() => (setAltura(altura-10))}>Diminui altura</button>
            </p>
        </div>
    )
}

export default AppTamanhoImages