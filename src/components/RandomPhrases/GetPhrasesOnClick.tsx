import { frases } from "../../utils/frases"
import { useState } from 'react'

export const GetPhrasesOnClick = () => {
    const [phrase, setPhrase] = useState('Uma frase qualquer')
    const [count, setCount] = useState(0)


    const getPhrase = () => {
        const randomNum = Math.floor(Math.random() * frases.length)
        setPhrase(frases[randomNum])
    }    
    
    return (
        <div>
            <button onClick={getPhrase}>Gerar Frase</button>
            <p>{phrase}</p>
            <button onClick={() => setCount(count + 1)}>Clicou {count} vezes.</button>
        </div>
    )
}