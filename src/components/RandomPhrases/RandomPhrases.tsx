import { frases } from "../../utils/frases"

export const RandomPhrases = () => {
    return (
        <div>
            {frases.map((frase, index) => (
                <p key={index}>{frase}</p>
            ))};
        </div>
    )
}